#!/bin/bash

MUSIC_DIR="$HOME/Documents/school_project/fss_sunday/green_app/src/assets/music"
UNUSED_DIR="$MUSIC_DIR/unused"

mkdir -p "$UNUSED_DIR"

files=(
  "Abiye_nebye_find.opus"
  "Aman_Be_Aman.opus"
  "Ante_Tehansete.opus"
  "Bedebre_Tabor_Teseba.opus"
  "Bekana_Zegelila_2.opus"
  "Bekeme_Yibe.opus"
  "Beselam_Sawo_Tekbelu.opus"
  "Elel_elele_yeserg_rejemu_edited.opus"
  "Elilbelu.opus"
  "Ellell_Desyibelene.opus"
  "Emne_Niye.opus"
  "Eneresiwer.opus"
  "Enze_Mesleye.opus"
  "Enze_sewere_emnene_welemayeni_edited.opus"
  "Eyesus_Hore.opus"
  "Ezrani_Tensagera.opus"
  "Fitha_Gifuan.opus"
  "Gize_erefta_edited.opus"
  "Habekeranyo.opus"
  "Hadigo_tesa_kutr2_edited.opus"
  "Hale_hale_hale_luya_yetmket_edited.opus"
  "Kedus_mikael_edited.opus"
  "Kemeroman_Tsege_Mushra.opus"
  "Kemetsige_Roman.opus"
  "Krestos_tewelde_krestos_tetemke_edited.opus"
  "Lese_Meskelu_Ensged.opus"
  "Mayereseyo_Weyne.opus"
  "Mesa_Kale_3_.opus"
  "Meskelbirhane_Lekulu_Alem.opus"
  "Metsa_kal_kutr1_edited.opus"
  "Metsa_kal_kutr2_edited.opus"
  "Misle_Mikael.opus"
  "Reeyu_ebeyu_lekdus_mikael_edited.opus"
  "Tamre.opus"
  "Titinash_Girumnew.opus"
  "Tmkete_bahre_edited.opus"
  "Weetu_Mikael.opus"
  "Wetelewee_Erayu.opus"
  "Wetelewete_2.opus"
  "Yewededegngeta_Minargelet.opus"
  "Yigberu_Leki.opus"
  "Yihew_Tewelede.opus"
  "Yihew_tewelede_edited.opus"
  "Yisebhu_Weyzameru.opus"
  "Yohannes_Haleo_Yatemk.opus"
  "Yohannesni_Halo_Group.opus"
  "Yohanseni_yatemk_yetmket_edited.opus"
  "Yomse_Leeliyaye.opus"
  "Zeetan_antsere_edited.opus"
  "Zentu_kulu_kone_besemay_bemdre_edited.opus"
  "Zikewetumikael_Hibstemena.opus"
  "bebzu_ahagur.opus"
  "selam_leki_arsema.aac"
)

moved=0
not_found=0

for file in "${files[@]}"; do
  src="$MUSIC_DIR/$file"
  if [ -f "$src" ]; then
    mv "$src" "$UNUSED_DIR/$file"
    echo "✅ Moved: $file"
    ((moved++))
  else
    echo "⚠️  Not found: $file"
    ((not_found++))
  fi
done

echo ""
echo "─────────────────────────────────"
echo "✅ Moved:     $moved files"
echo "⚠️  Not found: $not_found files"
echo "📁 Unused folder: $UNUSED_DIR"