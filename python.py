import os
import subprocess

def setup_directory(folder_name="compressed_assets"):
    if not os.path.exists(folder_name):
        os.makedirs(folder_name)
    return folder_name

def compress_audio(input_path, output_folder):
    base_name = os.path.basename(input_path)
    file_name = os.path.splitext(base_name)[0] + ".opus"
    output_path = os.path.join(output_folder, file_name)

    # Using 18k as a middle ground between size and quality
    cmd = [
        'ffmpeg', '-i', input_path,
        '-c:a', 'libopus', '-b:a', '16k', '-vbr', 'on', '-ac', '1',
        '-y', output_path
    ]
    
    subprocess.run(cmd, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    return output_path

def main():
    # Set your source directory
    source_dir = "/home/elias/Documents/school_project/fss_sunday/green_app/temp_compressed/"
    dest_folder = setup_directory("compressed_assets")
    
    if not os.path.exists(source_dir):
        print(f"❌ Source directory not found: {source_dir}")
        return

    # Filter for audio files
    valid_extensions = ['.mp3', '.wav', '.m4a', '.m4p', '.aac','.ogg']
    files_to_process = [f for f in os.listdir(source_dir) if os.path.splitext(f)[1].lower() in valid_extensions]

    print(f"🚀 Found {len(files_to_process)} files. Starting batch compression...")

    for index, filename in enumerate(files_to_process):
        input_path = os.path.join(source_dir, filename)
        
        print(f"[{index + 1}/{len(files_to_process)}] Processing: {filename}...", end="\r")
        
        try:
            compress_audio(input_path, dest_folder)
        except Exception as e:
            print(f"\n❌ Error processing {filename}: {e}")

    print(f"\n\n✅ Success! All files compressed and saved to: {os.path.abspath(dest_folder)}")



if __name__ == "__main__":
    main()











# import os
# import subprocess
# import shutil
# from PIL import Image
# # import pillow_avif

# def setup_directory(folder_name="compressed_assets"):
#     """Creates the output folder if it doesn't exist."""
#     if not os.path.exists(folder_name):
#         os.makedirs(folder_name)
#     return folder_name

# def compress_audio(input_path, output_folder):
#     """Compresses audio to Opus (target ~100KB)."""
#     base_name = os.path.basename(input_path)
#     file_name = os.path.splitext(base_name)[0] + ".opus"
#     output_path = os.path.join(output_folder, file_name)

#     # 12k bitrate + Mono is ideal for extreme size reduction
#     cmd = [
#         'ffmpeg', '-i', input_path,
#         '-c:a', 'libopus', '-b:a', '16k', '-vbr', 'on', '-ac', '1',
#         '-y', output_path
#     ]
    
#     subprocess.run(cmd, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
#     return output_path

# # def compress_image(input_path, output_folder):
# #     """Compresses image to AVIF."""
# #     base_name = os.path.basename(input_path)
# #     file_name = os.path.splitext(base_name)[0] + ".avif"
# #     output_path = os.path.join(output_folder, file_name)

# #     with Image.open(input_path) as img:
# #         img.save(output_path, "AVIF", quality=50, speed=6)
# #     return output_path

# def main():
#     while True:
#         dest_folder = setup_directory()
        
#         # Accept input from terminal
#         user_input = input("Enter the full path of the file to compress: ").strip()

#         # Remove quotes if user dragged-and-dropped file into terminal
#         user_input = user_input.replace("'", "").replace('"', "")

#         if not os.path.exists(user_input):
#             print("❌ Error: File not found. Please check the path.")
#             return

#         ext = os.path.splitext(user_input)[1].lower()

#         try:
#             if ext in ['.mp3', '.wav', '.m4a', '.m4p', '.aac']:
#                 print(f"🎵 Processing Audio: {os.path.basename(user_input)}...")
#                 result = compress_audio(user_input, dest_folder)
#                 print(f"✅ Saved to: {result}")

#             # elif ext in ['.jpg', '.jpeg', '.png', '.webp']:
#             #     print(f"🖼️ Processing Image: {os.path.basename(user_input)}...")
#             #     result = compress_image(user_input, dest_folder)
#             #     print(f"✅ Saved to: {result}")

#             else:
#                 print("⚠️ Unsupported file type. Only audio and images are accepted.")
        
#         except Exception as e:
#             print(f"❌ An error occurred: {e}")

# if __name__ == "__main__":
#     main()