// data/seedData.js
// ─────────────────────────────────────────────────────────────
// THIS IS THE ONLY FILE YOU EDIT TO ADD SONGS.
// Add as many songs as you want, no limit.
// This data is inserted into SQLite once on first app launch.
//
// RULES:
//  • Every song id must be a UNIQUE number across ALL songs
//  • Every subcategory id must be a UNIQUE string across ALL subcategories
//  • audio_url can be a remote URL or local require()
//  • cover_url can be a remote URL or local require()
//  • image on category/subcategory → local require() — this is the card background image
//  • duration is in seconds
//  • lyrics: [] is fine if you have no lyrics
//
// ID RANGES — follow this to never get duplicate IDs:
//  Category 1 (yewede_amet)       →  songs   1 –  99
//  Category 2 (st_john)           →  songs 200 – 299
//  Category 3 (yemeskel_beal)     →  songs 300 – 399
//  Category 4 (yearsema_mezmurat) →  songs 400 – 499
//  Category 5 (yemikael_mezmur)   →  songs 500 – 599
//  Category 6 (yehizbala_mezmur)  →  songs 600 – 699
// ─────────────────────────────────────────────────────────────

export const seedData = {
  categories: [
    // ═══════════════════════════════════════════════════════
    // CATEGORY 1
    // ═══════════════════════════════════════════════════════
    {
      id: 'holy_trinity',
      name: 'የቅድስት ሥላሴ መዝሙራት',
      icon: require('../icons/playlist.png'), 
      color: '#45B7D1',
      image: require('../assets/images/silase.jpg'), 
      subcategories: [
        {
          id: 'holy_trinity_sub1',
          name: 'እዝል ዓራራይ ቅኝት',
          image: require('../assets/images/silase.jpg'), 
          songs: [
              {
                id: 1,
                title: 'ኃይልየ ሥላሴ',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/silase.jpg'),
                audio_url: require('../assets/music/Hayle_Yeslase.opus'),
                duration: 120,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'ኃይልየ ሥላሴ ወጸወንየ ሥላሴ (2)' },
                  { timestamp: 19, text: 'በስመ ሥላሴ(2) እቀጠቅጥ ከይሴ(2)' },
                  { timestamp: 35, text: 'ትርጉም፡ ሥላሴ ኃይሌና መጠጊያዬ ናቸው በሥላሴ ዲያብሎስን እቀጠቅጣለሁ' }
                ],
              },
              {
                id: 2,
                title: 'ተናገሩ ድንቅ ሥራውን',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/silase.jpg'),
                audio_url: require('../assets/music/Tenageru.opus'),
                duration: 130,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'ተናገሩ ድንቅ ሥራውንም መስክሩ (2)' },
                  { timestamp: 18, text: 'ተአምሩን ለዓለም ንገሩ(2) ' },
                  { timestamp: 24, text: 'ድንቅ ሥራውን መስክሩ(2)' },
                  { timestamp: 31, text: 'ተአምሩን ለዓለም ንገሩ(2) ' },
                  { timestamp: 39, text: 'ድንቅ ሥራውን መስክሩ(2)' }
                ],
              },
              {
                id: 3,
                title: 'ኩሉ ዘፈቀደ',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/silase.jpg'),
                audio_url: require('../assets/music/Kulu_Zefekede.opus'),
                duration: 140,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'ኩሉ ዘፈቀደ ገብረ እግዚአብሔር (2)' },
                  { timestamp: 27, text: 'በሰማየኒ ወበምድርኒ ወበባሕርኒ ወበኩሉ ቀላያት(2)' },
                  { timestamp: 105, text: 'ትርጉም፡ እግዚአብሔር በሰማይና በምድር በባሕርም የወደደውን አደረገ' }
                ],
              },
              {
                id: 4,
                title: 'ነአምን በአብ',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/silase.jpg'),
                audio_url: require('../assets/music/Neamen_Beabe.opus'),
                duration: 150,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'ነአምን በአብ ወነአምን በወልድ(2) ወነአምን(4) ነአምን በመንፈስ ቅዱስ(2)' },
                  { timestamp: 55, text: 'እናምናለን በአብ እናምናለን በወልድ(2) እናምናለን(4) እናምናለን በመንፈስ ቅዱስ(2)' }
                ],
              },
              {
                id: 5,
                title: 'ኃይል የእግዚአብሔር ነው',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/silase.jpg'),
                audio_url: require('../assets/music/Hail_Yeegzaber_New.opus'),
                duration: 125,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'ኃይል የእግዚአብሔር ነው ማዳን የእግዚአብሔር ጥበብ የእግዚአብሔር(2)' },
                  { timestamp: 18, text: 'አንመካም በጉልበታችን እግዚአብሔር ነው የእኛ ኃይላችን(2)' }
                ],
              },
              {
                id: 6,
                title: 'እንዘ ይብሉ ይዜምሩ',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/silase.jpg'),
                audio_url: require('../assets/music/Enze_Yiblu.opus'),
                duration: 110,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'እንዘ ይብሉ ይዜምሩ በልሳን ዘኢያረምም(2) ' },
                  { timestamp: 25, text: 'መንግሥተ ሥላሴ ዘለዓለም(2)' },
                  { timestamp: 35, text: 'ትርጉም፡ በማያቋርጥ አንደበት ያመሰግናሉ የሥላሴ መንግሥት ዘላለማዊ ነው' }
                ],
              },
              {
                id: 7,
                title: 'ኢትዮጵያ ታበጽሕ እደዊሃ',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/silase.jpg'),
                audio_url: require('../assets/music/Ethiopia_Tabese.opus'),
                duration: 160,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'ኢትዮጵያ ታበጽሕ እደዊሃ (2) ኅበ እግዚአብሔር(2)' },
                  { timestamp: 48, text: 'እንዘ ትብል አምላኪየ(2) ነጽረኒ ወአድኅነኒ እምእደ ጻላኢ ወጸር(2)' },
                  { timestamp: 50, text: 'ትርጉም፡ ከጠላት ኃይል አድነን እያለች ኢትዮጵያ እጆቿን ወደ እግዚአብሔር ትዘረጋለች' }
                ],
              },
              {
                id: 8,
                title: 'አአትብ ወእትነሣእ',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/silase.jpg'),
                audio_url: require('../assets/music/Aateb.opus'),
                duration: 140,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'አአትብ ወእትነሣእ በስመ አብ ወወልድ ወመንፈስ ቅዱስ(2)' },
                  { timestamp: 39, text: 'ሠለስተ አስማተ ነሢእየ(2) እትዌከል ቦቱ(2)' },
                  { timestamp: 40, text: 'ትርጉም፡ በአብ በወልድ በመንፈስ ቅዱስ ስም ፊቴን አማትቤ እነሣለሁ' }
                ],
              },
              {
                id: 9,
                title: 'ሃሌሉያ ሰላም ዘአብ',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/silase.jpg'),
                audio_url: require('../assets/music/Haleluya.opus'),
                duration: 180,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'ሃሌሉያ(2) ሰላም ዘአብ ወፍቅር ዘወልድ ሃይማኖት ዘመንፈስ ቅዱስ(2)' },
                  { timestamp: 47, text: 'ይኅድር ማዕከሌክሙ አምላከ ሰላም(2) የሃሉ ምስሌክሙ(2)' },
                  { timestamp: 40, text: 'ሃሌሉያ (2) የአብ ሰላም የወልድ ፍቅር የመንፈስ ቅዱስ አንድነት ይደር በመካከላችሁ የሰላሙ አምላክ ሰላም(2) ከናንተ ጋራ ይሁን(2)' }
                ],
              },
              {
                id: 10,
                title: 'እምኩሉ ይሄይስ',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/silase.jpg'),
                audio_url: require('../assets/music/Emkulu_Yeheys.opus'),
                duration: 145,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'እምኩሉ ይሄይስ በሥላሴከ ተአምኖ(2) ወላዲትከ(2) ወወልድ ወላዲተከ ተማህፀኖ(2)' },
                  { timestamp: 20, text: 'ከሁሉም(2) ሥላሴን ነው  ማመን ማመስገን፤ ወልድን በወለደች(2) ድንግል አማላጃችን በእርስዋ እንማፀን' }
                ],
              },
              {
                id: 11,
                title: 'በስመ አብ ወወልድ',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/silase.jpg'),
                audio_url: require('../assets/music/Besmam_Weweld.opus'),
                duration: 120,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'በስመ አብ ወወልድ ወመንፈስ ቅዱስ ሥላሴ (2) የሲኦልን እሳት ትፈራለች ነፍሴ(2)' },
                  { timestamp: 15, text: 'አንተ አድናት አምላከ ሙሴ(2)' }
                ],
              },
              {
                id: 12,
                title: 'የአብ ፀጋ',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/silase.jpg'),
                audio_url: require('../assets/music/Yeab_Tsega.opus'),
                duration: 110,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'የአብ ፀጋ የወልድ ቸርነት የመንፈስ ቅዱስ አንድነት(2) ይደር በሁላችን እንድናገኝ ሕይወት(2)' }
                ],
              },
              {
                id: 13,
                title: 'አቀድም አእኩቶቶ',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/silase.jpg'),
                audio_url: require('../assets/music/Akedem.opus'),
                duration: 130,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'አቀድም አእኵቶቶ ለእግዚአብሔር(2) በእንተ እግዚእነ ኢየሱስ ክርስቶስ(2)' },
                  { timestamp: 15, text: 'ከሁሉም አስቀድመን ጌታን እናመስግን(2) አሜን ለዘለዓለም እግዚአብሔር ይመስገን(2)' }
                ],
              },
              {
                id: 14,
                title: 'ይረድዓነ አምላክነ',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/silase.jpg'),
                audio_url:  require('../assets/music/Yiredeane.opus'),
                duration: 150,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'ይረድዓነ አምላክነ(2) ወመድኃኒነ(2) አምላክነሰ አምላከ አድኅኖ ስብሐት ለአብ ስብሐት ለወልድ ስብሐት ለመንፈስ ቅዱስ(2) ' },
                  { timestamp: 20, text: 'ይረዳናል አምላካችን(2) መድኃኒታችን፤ አምላካችን የድህነት አምላክ ነው ምስጋና ለአብ ምስጋና ለወልድ ምስጋና ለመንፈስ ቅዱስ(2)' }
                ],
              },
              {
                id: 15,
                title: 'አሠርግውኒ ሥላሴ',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/silase.jpg'),
                audio_url: require('../assets/music/Asergeweni_Silase.opus'),
                duration: 180,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'አሠርግውኒ ሥላሴ በቀጠንተ ምጽዋት ሠናይ(2)' },
                  { timestamp: 15, text: 'እምነ ልማዱ ብሉይ ለነዌ ብሉይ እንዘ በዴዴሁ ይግዕር አልዓዛር ነዳይ(2)' },
                  { timestamp: 35, text: 'ትርጉም፡ ሥላሴ በአማረ በምጽዋት ልብስ አስጌጡኝ፤ ከስስታም ባለጸጋ ልምድ አላቁኝ' }
                ],
              },
              {
                id: 16,
                title: 'ዝንቱ ኩሉ ኮነ (ሥላሴ)',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/silase.jpg'),
                audio_url: require('../assets/music/Zintu_Kulu_Kone.opus'),
                duration: 110,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'ዝንቱ ኩሉ ኮነ በደብረ ብርሃን(2) በፈቃደ(3) እግዚአብሔር(2)' }
                ],
              },
              {
                id: 17,
                title: 'ኩሉ ይሰግድ',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/silase.jpg'),
                audio_url: require('../assets/music/Kulu_Yisegde.opus'),
                duration: 100,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'ኩሉ ይሰግድ (2) ለሥላሴ (3) ኩሉ ይሰግድ(2)' },
                  { timestamp: 10, text: 'ሁሉ ይሰግዳል(2) ለሥላሴ(2) ሁሉ ይሰግዳል(2)' }
                ],
              },
              {
                id: 18,
                title: 'የማይሳነው አምላክ',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/silase.jpg'),
                audio_url: require('../assets/music/Yemaysanew_Amlak.opus'),
                duration: 115,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'የማይሳነው አምላክ(2) ወልደ አምላክ(2) እናንተን አምጥቶ እኛን አቆይቶ(2) አምላክ ቸር አገናኘን(2)' }
                ],
              },
              {
                id: 19,
                title: 'እግዚአብሔር ብርሃኔና መድኃኒቴ ነው',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/silase.jpg'),
                audio_url: require('../assets/music/Egziabher_Birhanena_Medhanitenew.opus'),
                duration: 120,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'እግዚአብሔር ብርሃኔና መድኃኒቴ ነው(2) የሚያስደነግጠኝ የሚያስፈራኝ ማነው(2)' },
                  { timestamp: 15, text: 'አምላኬ መመኪያዬ ነው(2)' }
                ],
              },
              {
                id: 20,
                title: 'ዘየአምር እምቅድመ ኅሊና',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/silase.jpg'),
                audio_url: require('../assets/music/Zeyamre.opus'),
                duration: 135,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'ዘየአምር እምቅድመ ኅሊና ዘይሄሊ ልብ የአምር(2)' },
                  { timestamp: 15, text: 'አርአየ ኃይሎ በላዕሌነ ወጸገወነ ሠናይቱ እግዚአብሔር(2)' },
                  { timestamp: 30, text: 'ትርጉም፡ ልብ የሚያስበውን አስቀድሞ የሚያውቅ እግዚአብሔር ኃይሉንና በጎነቱን ገለጠ' }
                ],
              },
              {
                id: 21,
                title: 'ታቦተ ሕጉ ለእግዚአብሔር',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/silase.jpg'),
                audio_url: require('../assets/music/Tabote_Higu.opus'),
                duration: 160,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'ታቦተ ሕጉ ለእግዚአብሔር በካህናት ህፅርት ወበመንፈስ ቅዱስ ክልልት(2)' },
                  { timestamp: 20, text: 'ንጉሥኪ ጽዮን ኢይትመዋዕ ለፀር ወኢየኃድጋ ለሀገር(2)' },
                  { timestamp: 40, text: 'የሕግ ጽላቱ ለእግዚአብሔር በካህናት የታጠረች በመንፈስ ቅዱስም የተከለለች(2) ንጉሥሽ ጽዮን አይሸነፍም ለጠላት ሀገሪቱንም አይተዋትም(2)' }
                ],
              },
              {
                id: 22,
                title: 'ሠራዊተ መላእክቲሁ',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/silase.jpg'),
                audio_url: require('../assets/music/Serawite_Melaktu.opus'),
                duration: 105,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'ሠራዊተ ሠራዊተ መላእክቲሁ (2) ለመድኃኔዓለም(2) ይቀውሙ(2)' }
                ],
              },
              {
                  id: 23,
                  title: 'ወይቤሎ ለኖኅ',
                  artist: 'Zefinote Selam Sunday School',
                  cover_url: require('../assets/images/silase.jpg'),
                  audio_url: require('../assets/music/Weybello_Lenoh.opus'),
                  duration: 110,
                  genre: 'እዝል ዓራራይ ቅኝት',
                  lyrics: [
                    { timestamp: 0, text: 'ወይቤሎ ለኖኅ አመ አይኅ(2) ግበር ታቦተ በዘትድኅን(2)' },
                    { timestamp: 15, text: 'ትርጉም፡ እግዚአብሔር ለኖኅ ከጥፋት ውኃ የምትድንበትን መርከብ ሥራ አለው' }
                  ],
                },
                {
                  id: 24,
                  title: 'ሰአለ ሙሴ',
                  artist: 'Zefinote Selam Sunday School',
                  cover_url: require('../assets/images/silase.jpg'),
                  audio_url: require('../assets/music/Seale_Muse.opus'),
                  duration: 130,
                  genre: 'እዝል ዓራራይ ቅኝት',
                  lyrics: [
                    { timestamp: 0, text: 'ሰአለ ሙሴ(2) በእንተ ዘስሕቱ ሕዝብ(2) ኀበ አቡነ አብርሃም ይስሐቅ ወያዕቆብ(2)' },
                    { timestamp: 20, text: 'ትርጉም፡ ሙሴ ስለ ሳቱት እስራኤላዊያን በአባቶች ስም ማራቸው ብሎ ለመነ' }
                  ],
                },
                {
                  id: 25,
                  title: 'ዘበሰማየኒ',
                  artist: 'Zefinote Selam Sunday School',
                  cover_url: require('../assets/images/silase.jpg'),
                  audio_url: require('../assets/music/Zebesemayni.opus'),
                  duration: 115,
                  genre: 'እዝል ዓራራይ ቅኝት',
                  lyrics: [
                    { timestamp: 0, text: 'ዘበሰማይኒ ወዘበምድርኒ በቃለ ዳዊት ይሴብሑ (2) ወይብሉ ኩሎሙ ሃሌ ሉያ(2)' }
                  ],
                },
                {
                  id: 26,
                  title: 'መብረቀ ስብሐት',
                  artist: 'Zefinote Selam Sunday School',
                  cover_url: require('../assets/images/silase.jpg'),
                  audio_url: require('../assets/music/Mebreke_Sibhat.opus'),
                  duration: 160,
                  genre: 'እዝል ዓራራይ ቅኝት',
                  lyrics: [
                    { timestamp: 0, text: 'መብረቀ ስብሐት ራጉኤል ሊቀመላእክት(2) አብጽሕ ጸሎተነ(2)' },
                    { timestamp: 15, text: 'ቅድመ መንበረ አብ ወወልድ ወመንፈስ ቅዱስ ሥላሴ ዋሕድ(2)' },
                    { timestamp: 30, text: 'ትርጉም፡ የመላአክት አለቃ ራጉኤል ሆይ ጸሎታችንን ወደ ሥላሴ መንበር አሳርግ' }
                  ],
                },
                {
                  id: 27,
                  title: 'ስብሐት ለአብ',
                  artist: 'Zefinote Selam Sunday School',
                  cover_url: require('../assets/images/silase.jpg'),
                  audio_url: require('../assets/music/Sibhat_Leab.opus'),
                  duration: 180,
                  genre: 'እዝል ዓራራይ ቅኝት',
                  lyrics: [
                    { timestamp: 0, text: 'ስብሐት ለአብ ለአሀዜ ኩሉ ዓለም ስብሐት ለወልድ ለገባሬ ኩሉ ዓለም(2)' },
                    { timestamp: 20, text: 'ስብሐት ለመንፈስ ቅዱስ ለዘያርኁ ክረምተ በበዓመት(2)' },
                    { timestamp: 40, text: 'ትርጉም፡ ዓለምን ለፈጠረና ለያዘ፣ ክረምትንም ለሚያመላልስ አምላክ ምስጋና ይሁን' }
                  ],
                },
                {
                  id: 28,
                  title: 'ሃሌሉያ ለአብ',
                  artist: 'Zefinote Selam Sunday School',
                  cover_url: require('../assets/images/silase.jpg'),
                  audio_url: require('../assets/music/Haleluya2.opus'),
                  duration: 120,
                  genre: 'እዝል ዓራራይ ቅኝት',
                  lyrics: [
                    { timestamp: 0, text: 'ሃሌሉያ ለአብ ሃሌሉያ ለወልድ ለመንፈስ ቅዱስ(2) ሥላሴ ዋሕድ ለካህናተ ሰማይ ሕብራቲሁ(2)' }
                  ],
                },
                {
                  id: 29,
                  title: 'ስብሐት ወክብር ለሥላሴሁ',
                  artist: 'Zefinote Selam Sunday School',
                  cover_url: require('../assets/images/silase.jpg'),
                  audio_url: require('../assets/music/Sibhat_Wekibru.opus'),
                  duration: 110,
                  genre: 'እዝል ዓራራይ ቅኝት',
                  lyrics: [
                    { timestamp: 0, text: 'ስብሐት ወክብር ለሥላሴሁ(3) ይደሉ(2) ተዋሕዳውያን ይቤሉ እስመ ፈጠረነ እስትንፋስ ወበቃሉ(2)' }
                  ],
                },
                {
                  id: 30,
                  title: 'አብርሃም ወሰዶ',
                  artist: 'Zefinote Selam Sunday School',
                  cover_url: require('../assets/images/silase.jpg'),
                  audio_url: require('../assets/music/Abrham_Wesedo.opus'),
                  duration: 170,
                  genre: 'እዝል ዓራራይ ቅኝት',
                  lyrics: [
                    { timestamp: 0, text: 'አብርሃም ወሰዶ ለይስሐቅ ወልዱ ከመ ይስዖ (2)' },
                    { timestamp: 15, text: 'አውረደ ሎቱ ቤዛሁ በግዐ እኁዝ አቅርንቲሁ በዕፀ ሳቤቅ ዕፀ ሳቤቅ ብሒል ዕፀ ስርየት መሰቀል(2)' },
                    { timestamp: 35, text: 'ትርጉም፡ አብርሃም ልጁን ሊሰዋው ወሰደ፤ እግዚአብሔር ግን በሳቤቅ ዕፅ የተያዘ በግ ቤዛ አደረገለት' }
                  ],
                },
                {
                  id: 31,
                  title: 'ወጽአ እምድረ ካራን',
                  artist: 'Zefinote Selam Sunday School',
                  cover_url: require('../assets/images/silase.jpg'),
                  audio_url: require('../assets/music/Wesa_Emdrekaran.opus'),
                  duration: 110,
                  genre: 'እዝል ዓራራይ ቅኝት',
                  lyrics: [
                    { timestamp: 0, text: 'ወጽአ እምድረ ካራን ወቦአ ብሔረ ከነዓን(2) ተአመነ አብርሃም(2) በእግዚአብሔር (2)' }
                  ],
                },
                {
                  id: 32,
                  title: 'ለዚህ ላደረሰን',
                  artist: 'Zefinote Selam Sunday School',
                  cover_url: require('../assets/images/silase.jpg'),
                  audio_url: require('../assets/music/Lezih_Ladersen.opus'),
                  duration: 120,
                  genre: 'እዝል ዓራራይ ቅኝት',
                  lyrics: [
                    { timestamp: 0, text: 'ለዚህ ላደረሰን በሰላም በጤና (2) ሃሌሉያ(4) እናቅርብ ምስጋና(2)' }
                  ],
                },
                {
                  id: 33,
                  title: 'ኢትግድፈነ',
                  artist: 'Zefinote Selam Sunday School',
                  cover_url: require('../assets/images/silase.jpg'),
                  audio_url: require('../assets/music/Etgdfene.opus'),
                  duration: 280,
                  genre: 'እዝል ዓራራይ ቅኝት',
                  lyrics: [
                    { timestamp: 0, text: 'ኢትግድፈነ (2) ወኢትመንነነ (2) አምላከ ሰላም ተራድአነ(2)' },
                    { timestamp: 20, text: 'አትተወን (2) በፍፁም አትጣለን (2) የሰላም አምላክ ፈጥነህ እርዳን(2)' },
                    { timestamp: 40, text: 'እግዝእትነ (2) ነጽሪ ኀቤነ(2) ሰላመ ወልድኪ የሃሉ ምስሌነ (2)' },
                    { timestamp: 60, text: 'እመቤታችን(2) ተመልከች ወደኛ (2) የልጅሽ ቸርነት ይሁነን መዳኛ(2)' }
                  ],
                },
                {
                  id: 34,
                  title: 'ሥላሴን አመስግኑ',
                  artist: 'Zefinote Selam Sunday School',
                  cover_url: require('../assets/images/silase.jpg'),
                  audio_url: require('../assets/music/Silasen_Amesgnu.opus'),
                  duration: 300,
                  genre: 'እዝል ዓራራይ ቅኝት',
                  lyrics: [
                    { timestamp: 0, text: 'ሥላሴን አመስግኑ(2) የምድር ፍጥረታት ዘምሩ እልል በሉ' },
                    { timestamp: 20, text: 'በስመ አብ ወወልድ ወመንፈስ ቅዱስ ምስጋና ይገባል ከምንም በፊት' },
                    { timestamp: 40, text: 'ዓለማትን ሁሉ ከፈጠረ ጌታ ምስጋና ይገባል ከጠዋት እስከ ማታ' },
                    { timestamp: 60, text: 'ኪሩቤል ሱራፌል የሚያመሰግኑህ መላእክት በሰማይ የሚዘምሩልህ' },
                    { timestamp: 80, text: 'እኛም የአዳም ልጆች እንዘምራለን በሰማይ በምድር እንጠራሃለን' },
                    { timestamp: 100, text: 'ብራብ በሥላሴ እጠግባለሁኝ ብጠማም በአምላኬ እረካለሁኝ' },
                    { timestamp: 120, text: 'ሥላሴ አምባዬ ክብሬም ናቸውና ሁሌም ይመሩኛል በሕይወት ጎዳና' }
                  ],
                },


          ],
        },
        {
          id: 'holy_trinity_sub2',
          name: 'ግእዝ 1',
          image: require('../assets/images/silase.jpg'), 
          songs: [
            {
              id: 35,
              title: 'እስመ አልብነ ረዳኢ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/silase.jpg'),
              audio_url: require('../assets/music/Esme_Albne.opus'), 
              duration: 130,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'እስመ አልብነ ረዳኢ በጊዜ ምንዳቤ ወሐዘን(2) እስመ ዘእንበሌከ ባዕደ ኢነአምር(2)' },
                { timestamp: 20, text: 'ትርጉም፡ በችግርና በሐዘን ጊዜ የሚረዳን የለም እኛ ከአንተ በቀር ሌላ አናውቅምና' }
              ],
            },
            {
              id: 36,
              title: 'አማን በአማን መንግሥተ ሥላሴ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/silase.jpg'),
              audio_url: require('../assets/music/Aman_Be_Aman_Yesilaseachiru.opus'),
              duration: 110,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'አማን በአማን (4) መንግሥተ ሥላሴ (2) መንግሥተ ሥላሴ ዘለዓለም(2)' }
              ],
            },
            {
              id: 37,
              title: 'የኃያላን ኃያል',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/silase.jpg'),
              audio_url: require('../assets/music/Yehayalan_Hayal.opus'),
              duration: 180,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'የኃያላን ኃያል(3) ልዑል እግዚአብሔር(2) ተአምራተ ብዙ በሰማይ(2) በምድር' },
                { timestamp: 20, text: 'ተአምራቱ ብዙ በሰማይ(3) በምድር' },
                { timestamp: 40, text: 'ለአብና ለወልድ (3) ለመንፈስ ቅዱስ (2) መስገድ ይገባናል በሥጋ (2) በነፍስ' },
                { timestamp: 60, text: 'መስገድ ይገባናል በሥጋ (3) በነፍስ (2)' }
              ],
            },
            {
              id: 38,
              title: 'ዘእምርት ለኪ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/silase.jpg'),
              audio_url: require('../assets/music/Zemertileki.opus'),
              duration: 115,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'ዘእምርት ለኪ እምዘርእያ ብርሃነ መዘምራኒሃ(2) በደብረ ብርሃን(3) ሊቃውንቲሃ(2)' }
              ],
            },
            {
              id: 39,
              title: 'አማን በአማን',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/silase.jpg'),
              audio_url: require('../assets/music/Aman_Be_Aman_Yesilaserejimu.opus'),
              duration: 320,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'አማን በአማን (4)' },
                { timestamp: 10, text: 'መንግሥተ ሥላሴ ዘለዓለም' },
                { timestamp: 20, text: 'ንግበር ሰብአ ብለው አማን በአማን' },
                { timestamp: 30, text: 'አዳምን ፈጠሩት አማን በአማን' },
                { timestamp: 40, text: 'በቸርነትና በፍቅር ጎበኙት' },
                { timestamp: 50, text: 'ሁሉን በእጁ አድርገው ሁሉን አስገዙለት(2)' },
                { timestamp: 65, text: 'የፍቅር የደስታ አማን በአማን' },
                { timestamp: 75, text: 'የበረከት አባት አማን በአማን' },
                { timestamp: 85, text: 'መንግሥቱ ዘለዓለም ኅልፈት የሌለበት' },
                { timestamp: 95, text: 'በአፈ መላእክት የሚመሰገኑት(2)' },
                { timestamp: 110, text: 'የዚያን የደግ አባት አማን በአማን' },
                { timestamp: 120, text: 'የአብርሃምን ቤት አማን በአማን' },
                { timestamp: 130, text: 'እንደባረኩለት የእኛንም ባርኩልን' },
                { timestamp: 140, text: 'የቤታችን ዋልታ መሠረት ሁኑልን(2)' },
                { timestamp: 155, text: 'በመከራ ጊዜ አማን በአማን' },
                { timestamp: 165, text: 'ከጭንቅ የሚያወጡህ አማን በአማን' },
                { timestamp: 175, text: 'ስሙን ሳመሰግን ትረካለች ነፍሴ' },
                { timestamp: 185, text: 'የነሙሴ አምላክ የአብርሃሙ ሥላሴ(2)' }
              ],
            }
          ],
        },
        {
          id: 'holy_trinity_sub3',
          name: 'ግእዝ 2',
          image: require('../assets/images/silase.jpg'), 
          songs: [
            {
              id: 40,
              title: 'ዘሰማይ ገብረ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/silase.jpg'),
              audio_url: require('../assets/music/Zesemay_Gebre.opus'),
              duration: 160,
                genre: 'ግእዝ 3',
              lyrics: [
                { timestamp: 0, text: 'ዘሰማይ ገብረ ሰማየ ገብረ ወምድር ሣረረ(2)' },
                { timestamp: 10, text: 'አልቦ ዘይመስሎ ለአምላክነ(2)' },
                { timestamp: 20, text: 'ሰማይን የዘረጋ መሬትን ያጸና(2)' },
                { timestamp: 30, text: 'ኃያል አምላክ ሕያው ጌታ ያላንተ ማን አለና(2)' }
              ],
            },
            {
              id: 41,
              title: 'ለጌታዬ ለእግዚአብሔር',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/silase.jpg'),
              audio_url: require('../assets/music/Legetaye_Legizaber.opus'),
              duration: 120,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'ለጌታዬ ለእግዚአብሔር ስላደረግልኝ ምን እከፍለዋለሁ(2)' },
                { timestamp: 15, text: 'ምስጋና ነው እንጂ(2)ሌላ ምን እላለሁ(2)' }
              ],
            },
            {
              id: 42,
              title: 'ወመኑ መሐሪ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/silase.jpg'),
              audio_url: require('../assets/music/Wemenu_Mahari.opus'),
              duration: 110,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'ወመኑ መሐሪ ዘከማከ(2)' },
                { timestamp: 10, text: 'ወኩሉ ይሴፎ ኪያከ(4)' },
                { timestamp: 25, text: 'እንዳንተ ያለ መሐሪ ማነው እንዳንተ ያለ ይቅር ባይ ማነው ሁሉም አንተን ብቻ ተስፋ ያደርጋሉ(2)' }
              ],
            },
            {
              id: 43,
              title: 'ሰማየ በአብ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/silase.jpg'),
              audio_url: require('../assets/music/Semaye_Beab.opus'),
              duration: 180,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'ሰማየ በአብ ወበወልድ አርያመ ወበመንፈስ ቅዱስ ኀበ ዐረጉ አነ(2)' },
                { timestamp: 20, text: 'ሰማዕኩ እመላእክት ዝማሬ በአድንኖ ወበአትሕቶ ቦ ዘያጽሕሱ ወቦ ወይዜምሩ(2)' },
                { timestamp: 45, text: 'ትርጉም፡- በአብ ወደ ሰማይ በወልድ ወደ አርያም በመንፈስ ቅዱስም በወጣው ጊዜ ከመላእክት ዘንድ ዝማሬን ሰማሁ የሚያሸበሽቡም አሉ የሚዘምሩ አሉ' }
              ],
            },
            {
              id: 44,
              title: 'ሥላሴ ትትረመም',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/silase.jpg'),
              audio_url: require('../assets/music/Silase_Titremem_Short.opus'),
              duration: 100,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'ሥላሴ ትትረመም ወትትነከር(2)' },
                { timestamp: 10, text: 'ሥላሴ ትትረመም ወትትነከር(2)' },
                { timestamp: 20, text: 'ትርጉም የሥላሴ ሥራ ግሩም ነው ድንቅ ነው' }
              ],
            },
            {
              id: 45,
              title: 'ሥላሴ ትትረመም (ረጅሙ)',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/silase.jpg'),
              audio_url: require('../assets/music/Silase_Titremem_Long.opus'),
              duration: 180,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'ሥላሴ ትትረመም ወትትነከር(2)' },
                { timestamp: 15, text: 'እስመ በሥላሴ ትሔሉ በሰማይ ወበምድር' },
                { timestamp: 25, text: 'ሥላሴ ትትረመም ወትትነከር(2)' },
                { timestamp: 40, text: 'ወሰናያቲሃ ይሰብክ ቃለ ኢያሱ ሃዋርያ ፍቅር' },
                { timestamp: 50, text: 'ሥላሴ ትትረመም ወትትነከር(2)' },
                { timestamp: 65, text: 'ውስተ ሃገሮ ሃዳስ ደብረ ብርሃን ንግስተ አድባር' }
              ],
            },
            {
              id: 46,
              title: 'ዘእምቅድመ ዓለም',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/silase.jpg'),
              audio_url: require('../assets/music/Zemkidme_Aleme.opus'),
              duration: 140,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'ዘእምቅድመ ዓለም(2)' },
                { timestamp: 10, text: 'ህላዌሁ(2)ዓለም ዘእምቅድመ ዓለም(2)' },
                { timestamp: 20, text: 'ሳይፈጠር ዓለም(2)' },
                { timestamp: 30, text: 'የነበረ(2)ዓለም ሳይፈጠር ዓለም(2)' }
              ],
            },
            {
              id: 47,
              title: 'አእኩትዎ ወሰብእዎ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/silase.jpg'),
              audio_url: require('../assets/music/Aaktwo_Wesebhwo.opus'),
              duration: 90,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'አእኩትዎ ወሰብሕዎ(2)' },
                { timestamp: 10, text: 'አእኩትዎ ወሰብሕዎ(2)' }
              ],
            },
            {
              id: 48,
              title: 'ዘይሃይድ ዐይነ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/silase.jpg'),
              audio_url: require('../assets/music/Zeyhayd_Ayne.opus'),
              duration: 150,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'ዘይሃይድ ዐይነ(2)ልብሰ ክቡር ለቢሶ ዳዊት(2)' },
                { timestamp: 15, text: 'ቅድመ ታቦተ ሕግ ኀለየ ቅድመ ታቦት ሕግ(2)' },
                { timestamp: 30, text: 'ትርጉም ንጉሥ ዳዊት ዐይንን የሚያንጸባርቅ የክብር ልብስ ለብሶ ከሕግ ታቦት ፊት ዘመረ አመሰገነ' }
              ],
            },
            {
              id: 49,
              title: 'እሳተ ጽሩህ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/silase.jpg'),
              audio_url: require('../assets/music/Esat_Siru.opus'),
              duration: 160,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'እሳተ ጽርሑ ማየ ጠፈሩ(2)' },
                { timestamp: 10, text: 'ደመና መንኮራኩሩ ለመድኃኔዓለም(2)' },
                { timestamp: 20, text: 'እሳት አዳራሹ ውኃ ጣራው(2)' },
                { timestamp: 30, text: 'ደመና መመላለሻው ለመድኃኔዓለም(2)' }
              ],
            },
            {
              id: 50,
              title: 'በጸሎቱ ለኖኅ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/silase.jpg'),
              audio_url: require('../assets/music/Beselotu_Lenoh.opus'),
              duration: 120,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'በጸሎቱ ለኖኅ ተሰአለነ(2)' },
                { timestamp: 10, text: 'ዐይንከ መሐሪት ትትመየጠነ(2)' },
                { timestamp: 20, text: 'ትርጉም በኖኅ ጸሎት ይቅር በለን የምሕረት ዐይንክ ትምጣልን ትመለስልን' }
              ],
            },
            {
              id: 51,
              title: 'ንጉሥ ውእቱ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/silase.jpg'),
              audio_url: require('../assets/music/Nigus_Wetu.opus'),
              duration: 110,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'ንጉሥ ውእቱ ንጉሥ ሰላም (2)' },
                { timestamp: 10, text: 'አምላክነ(2)ፈጣሬ ዓለም(2)' },
                { timestamp: 20, text: 'ትርጉም፡- እግዚአብሔር አምላካችን ዓለምን የፈጠረ የሰላም ንጉሥ ነው' }
              ],
            },
            {
              id: 52,
              title: 'እምርት ዕለት',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/silase.jpg'),
              audio_url: require('../assets/music/Emert_Elet.opus'),
              duration: 115,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'እምርት ዕለት እንተ ርዕያ አብርሃም(2)' },
                { timestamp: 10, text: 'መዘምራኒሃ (3)ለቤተ ሥላሴ(2)' }
              ],
            },
            {
              id: 53,
              title: 'አንተ አቡነ ወአንተ እምነ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/silase.jpg'),
              audio_url: require('../assets/music/Ante_Abune_Wemne.opus'),
              duration: 220,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'አንተ አቡነ ወአንተ እምነ ርድአነ ወአድኅነን(2)' },
                { timestamp: 15, text: 'ፈኑ ሣህልከ ላዕሌነ በሰላም(2) ዕቀበነ እማዕከሌነ ኢትርኃቅ(2)' },
                { timestamp: 35, text: 'አንተ አባታችን አንተ እናታችን እርዳን አድነን(2)' },
                { timestamp: 50, text: 'ይቅርታህን ላክልን በላያችን በሰላም(2)ጠብቀን ከመካከላችን አትራቅ(2)' }
              ],
            },
            {
              id: 54,
              title: 'ልዑል እግዚአብሔር',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/silase.jpg'),
              audio_url: require('../assets/music/Leul_Egziabher_Yesilase.opus'),
              duration: 130,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'ልዑል እግዚአብሔር (2)ምስጋና ይገባሃል (2)' },
                { timestamp: 15, text: 'ለዚህች ዕለት ለዚህች ሰዓት በሰላም በጤና አደረስከን(2)' }
              ],
            },

          ],
        },
        {
          id: 'holy_trinity_sub4',
          name: 'ግእዝ 3',
          image: require('../assets/images/silase.jpg'), 
          songs: [
            {
              id: 55,
              title: 'የሥላሴን መንበር',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/silase.jpg'),
              audio_url: require('../assets/music/Yesilasen_Member.opus'),
              duration: 240,
              genre: 'ግእዝ 3',
              lyrics: [
                { timestamp: 0, text: 'የሥላሴን መንበር ቅዱሳን ከበውት' },
                { timestamp: 12, text: 'ኪሩቤል በደመና ዙፋኑን ይዘውት' },
                { timestamp: 24, text: 'ድንግልን ከመሐል ሚካኤልን ከፊት' },
                { timestamp: 36, text: 'አእላፍ መላእክት ሲሰግዱ በፍርሃት' },
                { timestamp: 48, text: 'እዩት ተመልከቱት የሰማዩን ድምቀት (አባት)(2)' },
                { timestamp: 65, text: 'የሥላሴን መንበር ቅዱሳን ከበውት' },
                { timestamp: 77, text: 'እያሸበሸቡ የሰማይ መላእክት' },
                { timestamp: 89, text: 'ካህናተ ሰማይ ቅዱስ ቅዱስ ቅዱስ ሲሉ' },
                { timestamp: 101, text: 'ይህን ታላቅ ምስጢር ሊያዩ የታደሉ' },
                { timestamp: 113, text: 'በጽድቅ ሥራቸው በምድር ይታያሉ(2)' },
                { timestamp: 130, text: 'የቅዱሳን ሕብረት የቅዱሳን ሀገር' },
                { timestamp: 142, text: 'ሲያወድስ ይኖራል የሥላሴን መንበር' },
                { timestamp: 154, text: 'ጽድቅና ርኅራሄ የተሞላ ሰማይ' },
                { timestamp: 166, text: 'እግዚአብሔር ያድለን በትንሣኤ እንድናይ (2)' }
              ],
            }
          ],
        },
      ],
    },
    // ═══════════════════════════════════════════════════════
    // CATEGORY 2 - second branch
    // ═══════════════════════════════════════════════════════
    {
      id: 'yeketera_mezmurat',
      name: 'የከተራ መዝሙራት',
      icon: require('../icons/playlist.png'),
      color: '#FF6B6B',
      image: require('../assets/images/ketera.jpg'), 
      subcategories: [

        {
          id: 'yeketera_mezmurat_sub1',
          name: 'እዝል ዓራራይ ቅኝት',
          image: require('../assets/images/ketera.jpg'), 
          songs: [
              {
                id: 56,
                title: 'ወረደ ወልድ',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/ketera.jpg'),
                audio_url: require('../assets/music/Werede_Welde.opus'),
                duration: 120,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'ወረደ ወልድ(3)' },
                  { timestamp: 10, text: 'እምሰማያት ውስተ ምጥማቃት(2)' },
                  { timestamp: 20, text: 'ትርጉም ወልድ ከሰማያት ወረዶ ወደ መጠመቂያው ገባ' }
                ],
              },
              {
                id: 57,
                title: 'ሖረ ኢየሱስ',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/ketera.jpg'),
                audio_url: require('../assets/music/Hore_Eyesus_1.opus'),
                duration: 130,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'ሖረ ኢየሱስ(2)' },
                  { timestamp: 10, text: 'እም ገሊላ ኀበ ዮሐንስ(2)' },
                  { timestamp: 20, text: 'ሄደ ኢየሱስ(2)' },
                  { timestamp: 30, text: 'ከገሊላ ወደ ዮሐንስ(2)' }
                ],
              },
              {
                id: 58,
                title: 'በፍስሐ ወበሰላም',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/ketera.jpg'),
                audio_url: require('../assets/music/Befisha_Webeselame.opus'),
                duration: 140,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'በፍስሐ(2) ወበሰላም(2)' },
                  { timestamp: 10, text: 'ወረደ ወልድ(4)ወልድ ውስተ ምጥማቃት(2)' },
                  { timestamp: 25, text: 'ትርጉም በሰላምና በደስታ ወልድ ወደ መጠመቂያው ወረደ' }
                ],
              },
              {
                id: 59,
                title: 'ይትፌሳሕ ሰማይ',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/ketera.jpg'),
                audio_url: require('../assets/music/Yitfesah_Semay.opus'),
                duration: 160,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'ይትፌሳሕ ሰማይ በልደቱ ወትትሐሰይ ምድር በጥምቀቱ ለመድኃኔዓለም(2)' },
                  { timestamp: 20, text: 'ሶበ ይወርድ ወልድ ውስተ ምጥማቃት(2)' },
                  { timestamp: 35, text: 'ትርጉም ሰማይ በልደቱ ይደሰታል ምድርም በመድኃኔዓለም ጥምቀት ትደሰታለች ወልድ ወደ መጠመቂያው በወረደ ጊዜ' }
                ],
              },
              {
                id: 60,
                title: 'ኅዲጎ ተስዓ',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/ketera.jpg'),
                audio_url: require('../assets/music/Hadigo_Tesa_2.opus'),
                duration: 100,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'ኅዲጎ ተስዓ(4)' },
                  { timestamp: 10, text: 'ወተስዓተ ተስዓተ ነገደ (2)' },
                  { timestamp: 20, text: 'ትርጉም 99 ነገደ መላእክት ትቶ' }
                ],
              },
              {
                id: 61,
                title: 'ኸኸ ኅዲጎ ተስዓ',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/ketera.jpg'),
                audio_url: require('../assets/music/Ehe_Hadigo_Tesa.opus'),
                duration: 150,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'ኸኸ ኅዲጎ ተስዓ ኸኸ ወተስዓተ ነገድ' },
                  { timestamp: 15, text: 'ኸኸ ኅዲጎ ተስዓ ኸኸ ወተስዓተ ነገድ' },
                  { timestamp: 30, text: 'ኸኸ ማዕከለ ባሕር ቆመ ማዕከለባሕር(2) ትርጉም 99 ነገደ መላእክት ትቶ በባሕር መካከልቆመ' }
                ],
              },
              {
                id: 62,
                title: 'ቅዱስ እግዚአብሔር',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/ketera.jpg'),
                audio_url: require('../assets/music/Kidus_Egziabher.opus'),
                duration: 180,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'ቅዱስ እግዚአብሔር ቅዱስ ኃያል ቅዱስ ሕያው ዘኢይመውት(2)' },
                  { timestamp: 15, text: 'ዘተወልደ እማርያም ወተጠምቀ በዮርዳኖስ ተሰአለነ እግዚኦ (2)' },
                  { timestamp: 35, text: 'ትርጉም ቅዱስ ኃያል ሕያው የማይሞተው እግዚአብሔር ከድንግል ማርያም ተወለደ በዮርዳኖስ ተጠመቀ ጌታችን ሆይ ይቅር በለን' }
                ],
              },
              {
                id: 63,
                title: 'ወወጽሐ በሰላም',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/ketera.jpg'),
                audio_url: require('../assets/music/wewesa_beselame.opus'),
                duration: 100,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'ወወጽአ በሰላም (4)' },
                  { timestamp: 15, text: 'ቆመ ማዕከለ ባሕር ገባ(2)' },
                  { timestamp: 25, text: 'ትርጉም በሰላም ወጣ በባሕር መካከል ቆመ' }
                ],
              }
          ]
        },
        {
          id: 'yeketera_mezmurat_sub2',
          name: 'ግእዝ 2',
          image: require('../assets/images/ketera.jpg'), 
          songs: [
            {
              id: 64,
              title: 'ኅዲጎ ተስዓ(1)',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/ketera.jpg'),
              audio_url: require('../assets/music/hadigo_tesa_1.opus'),
              duration: 110,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'ኅዲጎ ተስዓ (2)(2)' },
                { timestamp: 10, text: 'ወተስዓተ(2) ተስዓተ ነገደ(2)' },
                { timestamp: 20, text: 'ትርጉም 99 ነገደ መላእክት ትቶ በባሕር መካከል ቆመ' }
              ],
            }
          ]
        },
        {
          id: 'yeketera_mezmurat_sub3',
          name: 'ግእዝ 3',
          image: require('../assets/images/ketera.jpg'), 
          songs: [
            {
              id: 65,
              title: 'ኢየሱስ ሖረ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/ketera.jpg'),
              audio_url: require('../assets/music/Eyesus_hore_edited.opus'),
              duration: 115,
              genre: 'ግእዝ 3',
              lyrics: [
                { timestamp: 0, text: 'ኢየሱስ ሖረ ሀገረ እሴይ(2)' },
                { timestamp: 10, text: 'ዮሐንስ አጥመቆ በማይ(2)' },
                { timestamp: 20, text: 'ትርጉም ኢየሱስ ወደ እሴይ ሀገር ሄደ ዮሐንስ በውኃ አጠመቀው' }
              ],
            }
          ]
        },
      ]
    },

// ═══════════════════════════════════════════════════════
// CATEGORY 1
// ═══════════════════════════════════════════════════════
    {
      id: 'yetimket_mezmur',
      name: 'የጥምቀት መዝሙራት',
      icon: require('../icons/playlist.png'),
      color: '#fa4343',
      image: require('../assets/images/timket.jpg'), 
      subcategories: [

        {
          id: 'yetimket_mezmur_sub1',
          name: 'እዝል ዓራራይ ቅኝት',
          image: require('../assets/images/timket.jpg'), 
          songs: [
                {
                  id: 66,
                  title: 'ክርስቶስ ተወልደ',
                  artist: 'Zefinote Selam Sunday School',
                  cover_url: require('../assets/images/timket.jpg'),
                  audio_url: require('../assets/music/Kirstis_Tewelde_Kirstos.opus'),
                  duration: 120,
                  genre: 'እዝል ዓራራይ ቅኝት',
                  lyrics: [
                    { timestamp: 0, text: 'ክርስቶስ ተወልደ ክርስቶስ ተጠምቀ ክርስቶስ ተወልደ (2)' },
                    { timestamp: 15, text: 'ወለደነ ዳግመ (2)እመንፈስ ቅዱስ ወማይ (2)' },
                    { timestamp: 30, text: 'ትርጉም ክርስቶስ ተወለደ ተጠመቀ ዳግመኛ ከውኃና ከመንፈስ ቅዱስ ወለደን' }
                  ],
                },
                {
                  id: 67,
                  title: 'ሃሌ (2) ሃሌሉያ',
                  artist: 'Zefinote Selam Sunday School',
                  cover_url: require('../assets/images/timket.jpg'),
                  audio_url: require('../assets/music/Hale_Hale_Luya2.opus'),
                  duration: 110,
                  genre: 'እዝል ዓራራይ ቅኝት',
                  lyrics: [
                    { timestamp: 0, text: 'ሃሌ(2) ሃሌሉያ ሃሌ ሃሌሉያ ሃሌሉያ(2)' },
                    { timestamp: 15, text: 'ተጠምቀ ሰማያዊ በእደ መሬታዊ(2)' },
                    { timestamp: 25, text: 'አምላክ ሆይ ሕዝቦችህ ዳኑ በልደትህ (በጥምቀትህ)(2)' }
                  ],
                },
                {
                  id: 68,
                  title: 'መጽአ ቃል',
                  artist: 'Zefinote Selam Sunday School',
                  cover_url: require('../assets/images/timket.jpg'),
                  audio_url: require('../assets/music/Mesa_Kale_1_1.opus'),
                  duration: 130,
                  genre: 'እዝል ዓራራይ ቅኝት',
                  lyrics: [
                    { timestamp: 0, text: 'መጽአ ቃል እምደመና ዘይብል(2)(3)' },
                    { timestamp: 15, text: 'ዝንቱ ውእቱ ወልድየ ዘአፈቅር(2)' },
                    { timestamp: 25, text: 'መጣ ቃል ከደመና እንዲህ የሚል(2)' },
                    { timestamp: 35, text: 'የምወደው የማፈቅረው ልጄ ይህ ነው(2)' }
                  ],
                },
                {
                  id: 69,
                  title: 'መጽአ ቃል (ሎቱ ስምዕዎ)',
                  artist: 'Zefinote Selam Sunday School',
                  cover_url: require('../assets/images/timket.jpg'),
                  audio_url: require('../assets/music/Mesa_Kale_2_.opus'),
                  duration: 140,
                  genre: 'እዝል ዓራራይ ቅኝት',
                  lyrics: [
                    { timestamp: 0, text: 'መጽአ ቃል(2) እም ደመና ዘይብል ዝንቱ ውእቱ ወልድየ(2)' },
                    { timestamp: 15, text: 'ዘአፈቅር ሎቱ ስምዕዎ (2)' },
                    { timestamp: 25, text: 'ትርጉም ከደመና እንዲህ የሚል ቃል መጣ የምወደው የምወልደው የማፈቅረው ልጄ ይህ ነው እርሱን ስሙት' }
                  ],
                },
                {
                  id: 70,
                  title: 'መጽአ ቃል (ተርህወ ሰማይ)',
                  artist: 'Zefinote Selam Sunday School',
                  cover_url: require('../assets/images/timket.jpg'),
                  audio_url: require('../assets/music/Metsa_kal_kutr3_edited.opus'),
                  duration: 100,
                  genre: 'እዝል ዓራራይ ቅኝት',
                  lyrics: [
                    { timestamp: 0, text: 'መጽአ ቃል(2) እም ደመና ዘይብል (2)' },
                    { timestamp: 10, text: 'ዝንቱ ውእቱ ወልድየ ዘአፈቅር(2)' },
                    { timestamp: 20, text: 'ትርጉም ከደመና እንዲህ የሚል ቃል መጣ ከውኃ ወጥቶ ሰማይ ተከፈተለት' }
                  ],
                },
                {
                  id: 71,
                  title: 'በእደ ዮሐንስ',
                  artist: 'Zefinote Selam Sunday School',
                  cover_url: require('../assets/images/timket.jpg'),
                  audio_url: require('../assets/music/Beede_Yohannes_Tetemke.opus'),
                  duration: 110,
                  genre: 'እዝል ዓራራይ ቅኝት',
                  lyrics: [
                    { timestamp: 0, text: 'በእደ ዮሐንስ ተጠምቀ ኢየሱስ ናዝራዊ(2)' },
                    { timestamp: 10, text: 'ሰማያዊ(5)ኢየሱስ ናዝራዊ(2)' },
                    { timestamp: 20, text: 'ትርጉም የናዝሬቱ ኢየሱስ በዮሐንስ እጅ ተጠመቀ' }
                  ],
                },
                {
                  id: 72,
                  title: 'ዮሐንስኒ',
                  artist: 'Zefinote Selam Sunday School',
                  cover_url: require('../assets/images/timket.jpg'),
                  audio_url: require('../assets/music/Yohansni_Halo_Yatemk.opus'),
                  duration: 100,
                  genre: 'እዝል ዓራራይ ቅኝት',
                  lyrics: [
                    { timestamp: 0, text: 'ዮሐንስኒ ሀሎ ያጠምቅ (2)' },
                    { timestamp: 10, text: 'በሄኖን በቅሩበ ሳሌም(2)' },
                    { timestamp: 20, text: 'ትርጉም ዮሐንስ በሳሌም አቅራቢያ በሄኖን በዮርዳኖስ ማዶ ያጠምቅ ነበረ' }
                  ],
                },
                {
                  id: 73,
                  title: 'አጥመቆ በማይ',
                  artist: 'Zefinote Selam Sunday School',
                  cover_url: require('../assets/images/timket.jpg'),
                  audio_url: require('../assets/music/Atmeko_Bemay.opus'),
                  duration: 80,
                  genre: 'እዝል ዓራራይ ቅኝት',
                  lyrics: [
                    { timestamp: 0, text: 'አጥመቆ በማይ(2)' },
                    { timestamp: 10, text: 'ዮሐንስ አጥመቆ በማይ(2)' },
                    { timestamp: 20, text: 'ትርጉም ዮሐንስ በውኃ አጠመቀው' }
                  ],
                },
                {
                  id: 74,
                  title: 'ጥምቀትከ ይኩነነ ቤዛ',
                  artist: 'Zefinote Selam Sunday School',
                  cover_url: require('../assets/images/timket.jpg'),
                  audio_url: require('../assets/music/Timketke.opus'),
                  duration: 100,
                  genre: 'እዝል ዓራራይ ቅኝት',
                  lyrics: [
                    { timestamp: 0, text: 'ጥምቀትከ ይኩነነ ቤዛ(2)' },
                    { timestamp: 10, text: 'ይኩነነ ቤዛ(4)ጥምቀትከ ይኩነነ ቤዛ(2)' },
                    { timestamp: 20, text: 'ትርጉም ጥምቀትክ ቤዛ መድኃኒት ይሁነን' }
                  ],
                },
                {
                  id: 75,
                  title: 'ነድ ለማየ ባሕር',
                  artist: 'Zefinote Selam Sunday School',
                  cover_url: require('../assets/images/timket.jpg'),
                  audio_url: require('../assets/music/Ned_Lemaybahr_Kebebo.opus'),
                  duration: 110,
                  genre: 'እዝል ዓራራይ ቅኝት',
                  lyrics: [
                    { timestamp: 0, text: 'ነድ ለማየ ባሕር ከበቦ(2)' },
                    { timestamp: 10, text: 'ማየ ባሕር ኀበ የሐውር ፀበቦ(2)' },
                    { timestamp: 20, text: 'ትርጉም እሳት የባሕሩን ውኃ ከበበው ባሕሩም የሚሄድበት ጨነቀው' }
                  ],
                },
                {
                  id: 76,
                  title: 'ጥምቀት አምጽአ',
                  artist: 'Zefinote Selam Sunday School',
                  cover_url: require('../assets/images/timket.jpg'),
                  audio_url: require('../assets/music/Timkete_Amsa.opus'),
                  duration: 180,
                  genre: 'እዝል ዓራራይ ቅኝት',
                  lyrics: [
                    { timestamp: 0, text: 'ጥምቀት አምጽአ ሕፅወ ንግሥት ለእሊአሁ እምኀበ ፊልጶስ ድኀረ ተጠምቀ ለሊሁ(2)' },
                    { timestamp: 15, text: 'ሰላማ አቡነ አምጽአ ለነ በዕድሜሁ ለመድኃኒነ ምሥጢረ ደሙ ወሥጋሁ(2)' },
                    { timestamp: 35, text: 'ትርጉም የንግሥቲቱ ጃንደረባ በፊልጶስ ዘንድ ራሱ ከተጠመቀ በኋላ ጥምቀትን አመጣልን አባታችን አቡነ ሰላማም በዘመኑ የመድኃኒታችንን የደሙንና የሥጋውን ምሥጢር አመጣልን' }
                  ],
                },
                {
                  id: 77,
                  title: 'ይቤሎ መንፈስ ቅዱስ',
                  artist: 'Zefinote Selam Sunday School',
                  cover_url: require('../assets/images/timket.jpg'),
                  audio_url: require('../assets/music/Yibelo_Menfeskiduse.opus'),
                  duration: 180,
                  genre: 'እዝል ዓራራይ ቅኝት',
                  lyrics: [
                    { timestamp: 0, text: 'ይቤሎ መንፈስ ቅዱስ ለፊልጶስ ሑር ወትልዎ ለዝንቱ ሠረገላ ዘአፍራስ(2)' },
                    { timestamp: 15, text: 'ፊልጶስ መሐሮ ለባኮስ በእንተ ክርስቶስ ወአጥመቆ በማየ ጥምቀት ሐዲስ(2)' },
                    { timestamp: 35, text: 'አለው መንፈስ ቅዱስ ፊልጶስን ሂድና ተከተለው ይህንን የአፍራስ ሠረገላ (2)' },
                    { timestamp: 50, text: 'ፊልጶስ አስተማረው ለባኮስ ስለ ክርስቶስ አጠመቀው በማየ ጥምቀት ሐዲስ(2)' }
                  ],
                },
                {
                  id: 78,
                  title: 'በወንጌሉ ያመናችሁ',
                  artist: 'Zefinote Selam Sunday School',
                  cover_url: require('../assets/images/timket.jpg'),
                  audio_url: require('../assets/music/Bewengelu_Yamenachu.opus'),
                  duration: 100,
                  genre: 'እዝል ዓራራይ ቅኝት',
                  lyrics: [
                    { timestamp: 0, text: 'በወንጌሉ ያመናችሁ(2)' },
                    { timestamp: 10, text: 'እንኳን ለብርሃነ ጥምቀቱ አደረሳችሁ(2)' }
                  ],
                },
                {
                  id: 79,
                  title: 'ሰማያዊ',
                  artist: 'Zefinote Selam Sunday School',
                  cover_url: require('../assets/images/timket.jpg'),
                  audio_url: require('../assets/music/Semayawi.opus'),
                  duration: 100,
                  genre: 'እዝል ዓራራይ ቅኝት',
                  lyrics: [
                    { timestamp: 0, text: 'ሰማያዊ(3)' },
                    { timestamp: 10, text: 'ተጠምቀ በማይ(2)ሰማያዊ ኢየሱስ ናዝራዊ(2)' }
                  ],
                },
                {
                  id: 80,
                  title: 'ባሕረ ባሕረ',
                  artist: 'Zefinote Selam Sunday School',
                  cover_url: require('../assets/images/timket.jpg'),
                  audio_url: require('../assets/music/Bahre_Zenegede.opus'),
                  duration: 90,
                  genre: 'እዝል ዓራራይ ቅኝት',
                  lyrics: [
                    { timestamp: 0, text: 'ባሕረ (2)ዘነገደ(2)' },
                    { timestamp: 10, text: 'ዘነገደ ባሕረ አማኑኤል (2)' }
                  ],
                },
                {
                  id: 81,
                  title: 'ክርስቶስ ተወልደ ወተጠምቀ',
                  artist: 'Zefinote Selam Sunday School',
                  cover_url: require('../assets/images/timket.jpg'),
                  audio_url: require('../assets/music/Kirstos_Tewelde_Wetetemke.opus'),
                  duration: 110,
                  genre: 'እዝል ዓራራይ ቅኝት',
                  lyrics: [
                    { timestamp: 0, text: 'ክርስቶስ ተወልደ ወተጠምቀ(2)' },
                    { timestamp: 10, text: 'አስተርእዮቱ አማን አስተርእዮቱ(2)' }
                  ],
                },
                {
                  id: 82,
                  title: 'በዛሬው ጥምቀቱ',
                  artist: 'Zefinote Selam Sunday School',
                  cover_url: require('../assets/images/timket.jpg'),
                  audio_url: require('../assets/music/Bezarew_Timketu.opus'),
                  duration: 200,
                  genre: 'እዝል ዓራራይ ቅኝት',
                  lyrics: [
                    { timestamp: 0, text: 'በዛሬው ጥምቀቱ እሰይ እሰይ' },
                    { timestamp: 10, text: 'ተነግሮን አዋጅ ነጻነት አገኘን በእግዚአብሔር አብ ልጅ' },
                    { timestamp: 25, text: 'እሰይ እሰይ ተወለደ ተጠመቀ' },
                    { timestamp: 35, text: 'ከሰማየ ሰማያት ወረደ በቅዱስ ዮሐንስ ተጠመቀ' },
                    { timestamp: 50, text: 'አብ መሰከረለት እሰይ እሰይ በደመና ሳለ' },
                    { timestamp: 60, text: 'የምወደው ልጄ ይህ ነው እያለ' },
                    { timestamp: 75, text: 'ጌታ በዮሐንስ እሰይ እሰይ ሊጠመቅ ሲል ገና' },
                    { timestamp: 85, text: 'ወደ ኋላ ሸሸ ዮርዳኖስ ፈራና' },
                    { timestamp: 100, text: 'እንደ አንበሳ ደቦል እሰይ እሰይ ተራሮች ዘለሉ' },
                    { timestamp: 110, text: 'ዕፁብ ነው ድንቅ ነው ግሩም ነው እያሉ' }
                  ],
                },
                {
                  id: 83,
                  title: 'አምላክ ከዮርዳኖስ',
                  artist: 'Zefinote Selam Sunday School',
                  cover_url: require('../assets/images/timket.jpg'),
                  audio_url: require('../assets/music/Amlake_Yordanos.opus'),
                  duration: 220,
                  genre: 'እዝል ዓራራይ ቅኝት',
                  lyrics: [
                    { timestamp: 0, text: 'አምላክ ከዮርዳኖስ(2)ተጠምቆ ሲወጣ' },
                    { timestamp: 15, text: 'ሰማያት ተከፍተው(3)ከሰማይ ቃል መጣ' },
                    { timestamp: 30, text: 'ቃሉ እንዲህ ነበር(2)እንደሚከተለው' },
                    { timestamp: 40, text: 'የምወደው ልጄ(3)ይህ ነው የሚል ነው' },
                    { timestamp: 55, text: 'ዘጠና ዘጠኙን(2)መላእክቱን ትቶ' },
                    { timestamp: 65, text: 'አምላክ ተጠመቀ(3)ከዮርዳኖስ ገብቶ' },
                    { timestamp: 80, text: 'ዕፁብ ድንቅ ነው(2)ይገርማል በውኑ' },
                    { timestamp: 90, text: 'ሰማያዊ አምላክ(3)ምድራዊ መሆኑ' },
                    { timestamp: 105, text: 'አብ የነገረለት(2)በደመና ሳለ' },
                    { timestamp: 115, text: 'የምወደው ልጄ(3)ይህ ነው እያለ' }
                  ],
                },
                {
                  id: 84,
                  title: 'ግነዩ ለእግዚአብሔር',
                  artist: 'Zefinote Selam Sunday School',
                  cover_url: require('../assets/images/timket.jpg'),
                  audio_url: require('../assets/music/Gineyu_Leegzaber.opus'),
                  duration: 320,
                  genre: 'እዝል ዓራራይ ቅኝት',
                  lyrics: [
                    { timestamp: 0, text: 'ግነዩ ለእግዚአብሔር እስመ ኄር (2)' },
                    { timestamp: 12, text: 'እስመ ለዓለም ምሕረቱ እስመ ለዓለም (4)' },
                    { timestamp: 30, text: 'እናመስግንሽ የአምላክ እናት በዝማሬ(2)' },
                    { timestamp: 42, text: 'የዓለም ቤዛ ነውና የማኅፀንሽ ፍሬ(4)' },
                    { timestamp: 60, text: 'ከሰማየ ሰማያት ወርዶ ካንቺ ተወልዶ(2)' },
                    { timestamp: 72, text: 'ክርስቶውስ ወረደ ዮርዳኖስ እኛን ለመቀደስ(4)' },
                    { timestamp: 90, text: 'በድንግልና የወለድሽው ክርስቶስ(2)' },
                    { timestamp: 102, text: 'የድኩማኖች ብርታት ነው የሕሙማን ፈውስ(4)' },
                    { timestamp: 120, text: 'በዮሐንስ እጅ ተጠመቀ ዕዳችንን ፋቀ(2)' },
                    { timestamp: 132, text: 'በቸርነቱ ጠብቆ ከበደል አራቀን(4)' },
                    { timestamp: 150, text: 'ስምሽን የጠራ ዝክርሽንም ያዘከረ(2)' },
                    { timestamp: 162, text: 'በመንግሥተ ሰማይ ይኖራል እንደተከበረ(4)' },
                    { timestamp: 180, text: 'ብርሃነ መለኮት ያደረብሽ አዳራሽ(2)' },
                    { timestamp: 192, text: 'ቅድስተ ቅዱሳን ማርያም ድንግል አንቺ ነሽ(4)' },
                    { timestamp: 210, text: 'እመቤታችን እናታችን ማርያም(2)' },
                    { timestamp: 222, text: 'የተማፀነሽ ይድናል ለዘለዓለም(2)' },
                    { timestamp: 240, text: 'ድንግልናሽም ሳይለወጥ ወልድን የወለድሽ(2)' },
                    { timestamp: 252, text: 'የጌታችን እናት ማርያም ድንግል አንቺ ነሽ(4)' }
                  ],
                },
                {
                  id: 85,
                  title: 'የዓለምን በደል',
                  artist: 'Zefinote Selam Sunday School',
                  cover_url: require('../assets/images/timket.jpg'),
                  audio_url: require('../assets/music/Yealemn_Bedeln.opus'),
                  duration: 300,
                  genre: 'እዝል ዓራራይ ቅኝት',
                  lyrics: [
                    { timestamp: 0, text: 'የዓለምን በደል የሰውን ግፍ አይቶ' },
                    { timestamp: 10, text: 'ዘጠና ዘጠኙን መላእክት ትቶ' },
                    { timestamp: 20, text: 'ጽድቅን ለመፈጸም በደልን አጥፍቶ' },
                    { timestamp: 30, text: 'የሰላሙ መሪ የሰላሙ ዳኛ አምላክ ተወለደ ተጠመቀ ለእኛ' },
                    { timestamp: 45, text: 'የሰማዮች ሰማይ የማይችሉት ንጉሥ ተወልዶ ሲጠመቅ እኛን ለመቀደስ' },
                    { timestamp: 55, text: 'ተራሮች ደንግጠው ዘለሉ በመንፈስ' },
                    { timestamp: 65, text: 'የሰላሙ መሪ የሰላሙ ዳኛ አምላክ ተወለደ ተጠመቀ ለእኛ' },
                    { timestamp: 80, text: 'ባሕር ተጨነቀች ጠበባት መሬቱ ዮርዳኖስም ሸሸ አልቆመም ከፊቱ' },
                    { timestamp: 95, text: 'እንደተናገረው ዳዊት በትንቢቱ' },
                    { timestamp: 105, text: 'የሰላሙ መሪ የሰላሙ ዳኛ አምላክ ተወለደ ተጠመቀ ለእኛ' },
                    { timestamp: 120, text: 'ልጁ በዮርዳኖስ ጽድቅን ሲመሠርት መጣ በደመና ሰማያዊው አባት' },
                    { timestamp: 130, text: 'እየመሰከረ የልጁን ጌትነት' },
                    { timestamp: 140, text: 'የሰላሙ መሪ የሰላሙ ዳኛ አምላክ ተወለደ ተጠመቀ ለእኛ' },
                    { timestamp: 155, text: 'እንደምናነበው በወንጌል ተጽፎ መንፈስ ቅዱስ ታየ በራሱ ላይ አርፎ' },
                    { timestamp: 165, text: 'በርግብ ምሳሌነት ክንፉን አሰይፎ' },
                    { timestamp: 175, text: 'የሰላሙ መሪ የሰላሙ ዳኛ አምላክ ተወለደ ተጠመቀ ለእኛ' },
                    { timestamp: 190, text: 'ባሕር ስትጨነቅ ተራራው ሲዘምር ሰማዩ ሲከፈት ደመናው ሲናገር' },
                    { timestamp: 200, text: 'ዓለም በዛሬው ቀን አየች ታላቅ ምሥጢር' },
                    { timestamp: 210, text: 'የሰላሙ መሪ የሰላሙ ዳኛ አምላክ ተወለደ ተጠመቀ ለእኛ' }
                  ],
                },
                {
                  id: 86,
                  title: 'ወወጽአ በሰላም (ዮርዳኖስም ሸሸ)',
                  artist: 'Zefinote Selam Sunday School',
                  cover_url: require('../assets/images/timket.jpg'),
                  audio_url: require('../assets/music/wewesa_beselame.opus'),
                  duration: 180,
                  genre: 'እዝል ዓራራይ ቅኝት',
                  lyrics: [
                    { timestamp: 0, text: 'ወወጽአ በሰላም (2)' },
                    { timestamp: 10, text: 'ቆመ ማዕከለ ባሕር ገብአ' },
                    // { timestamp: 20, text: 'ጥምቀት የማይገባው እግዚአብሔር ሊጠመቅ ፈልጎ ሄደ ወደ ባሕር' },
                    // { timestamp: 35, text: 'ትንቢት ይፈጸም ዘንድ በመጽሐፍ ያለው ዮሐንስን ጠርቶ አጥምቀኝ አለው' },
                    // { timestamp: 50, text: 'የተያዘብንን ዕዳችንን ፋቀ ከክብር ዙፋኑ ወርዶ ተጠመቀ' },
                    // { timestamp: 65, text: 'ባሕር ተናወጠች አልችለውም ብላ ዮርዳኖስም ሸሸ ሄደ ወደ ኋላ' },
                    // { timestamp: 80, text: 'ድንግል በማኀፀን ይዛ የኖረችው ምነው የዛ ጊዜ ባሕር አልችል አለችው' },
                    // { timestamp: 95, text: 'እሳተ መለኮት መሆኑን ተረድታ ባሕር ገሰገሰች ጨነቃት ለአንድ አፍታ' }
                  ],
                }
          ]
        },
        {
          id: 'yetimket_mezmur_sub2',
          name: 'ግእዝ 1',
          image: require('../assets/images/timket.jpg'), 
          songs: [
                {
                  id: 87,
                  title: 'እንዘ ሕጻን ልህቀ',
                  artist: 'Zefinote Selam Sunday School',
                  cover_url: require('../assets/images/timket.jpg'),
                  audio_url: require('../assets/music/Enze_Hisan_Like.opus'),
                  duration: 130,
                  genre: 'ግእዝ 1',
                  lyrics: [
                    { timestamp: 0, text: 'እንዘ ሕጻን ልህቀ በዮርዳኖስ ተጠምቀ (2)' },
                    { timestamp: 15, text: 'በዮርዳኖስ(2)ዮርዳኖስ(2) ተጠምቀ በዮሐንስ(2)' },
                    { timestamp: 30, text: 'ትርጉም ሕጻን ሆኖ በትንሽ በትንሽ አደገ በዮርዳኖስ ወንዝ በዮሐንስ እጅ ተጠመቀ' }
                  ],
                },
                {
                  id: 88,
                  title: 'ወተመሰሉ',
                  artist: 'Zefinote Selam Sunday School',
                  cover_url: require('../assets/images/timket.jpg'),
                  audio_url: require('../assets/music/Wetemeselu.opus'),
                  duration: 140,
                  genre: 'ግእዝ 1',
                  lyrics: [
                    { timestamp: 0, text: 'ወተመሰሉ ሰብአ ዐይን አባግዓ ላባ ወማይ(2)' },
                    { timestamp: 15, text: 'ለኅበ አባግዕ ዘዮም(2)ወጥምቀተ ዐባይ(2)' },
                    { timestamp: 30, text: 'ትርጉም ውኃን የጠጡ የላባ በጎች ምልክትን አይተው አንድ እንደሆኑ በጥምቀት አንድ ሆኑ ለተባሉ ለዛሬዎቹም ምእመናን ምሳሌ ሆኑ መዝ 22:23' }
                  ],
                },
                {
                  id: 89,
                  title: 'ሶበ መጽአ ቃል',
                  artist: 'Zefinote Selam Sunday School',
                  cover_url: require('../assets/images/timket.jpg'),
                  audio_url: require('../assets/music/Sobe_mets_kal_edited.opus'),
                  duration: 120,
                  genre: 'ግእዝ 1',
                  lyrics: [
                    { timestamp: 0, text: 'ሶበ መጽአ ቃል እምሰማይ ለተናብቦ(2)' },
                    { timestamp: 15, text: 'ከበቦ(3)ለማየ ባሕር መጽአ ነድ ለማይ ከበቦ(2)' },
                    { timestamp: 30, text: 'ትርጉም ቃል ከሰማይ ለመናገር በመጣ ጊዜ እሳት የዮርዳኖስን ውኃ ከበበው' }
                  ],
                },
                {
                  id: 90,
                  title: 'ዮሐንስ አጥመቆ',
                  artist: 'Zefinote Selam Sunday School',
                  cover_url: require('../assets/images/timket.jpg'),
                  audio_url: require('../assets/music/Yohannes_atmeko_edited.opus'),
                  duration: 110,
                  genre: 'ግእዝ 1',
                  lyrics: [
                    { timestamp: 0, text: 'ዮሐንስ አጥመቆ ለኢየሱስ(2)' },
                    { timestamp: 15, text: 'በፈለገ ዮርዳኖስ በፈለገ ፈለገ ዮርዳኖስ(2)' },
                    { timestamp: 30, text: 'ትርጉም ዮሐንስ ኢየሱስ ክርስቶስን በዮርዳኖስ ወንዝ አጠመቀው' }
                  ],
                },
                {
                  id: 91,
                  title: 'አማን በአማን (መንክር)',
                  artist: 'Zefinote Selam Sunday School',
                  cover_url: require('../assets/images/timket.jpg'),
                  audio_url: require('../assets/music/Aman_beaman_menkere_yeldet_edited.opus'),
                  duration: 100,
                  genre: 'ግእዝ 1',
                  lyrics: [
                    { timestamp: 0, text: 'አማን በአማን(2)መንክር(2)' },
                    { timestamp: 15, text: 'መንክር ስብሐተ ጥምቀቱ(2)' },
                    { timestamp: 30, text: 'ትርጉም እውነት በእውነት የጌታ ጥምቀቱ ምስጋና ድንቅ ነው' }
                  ],
                },
                {
                  id: 92,
                  title: 'አንከርዎ ለማየ',
                  artist: 'Zefinote Selam Sunday School',
                  cover_url: require('../assets/images/timket.jpg'),
                  audio_url: require('../assets/music/Ankerwo_lemaye_edited.opus'),
                  duration: 90,
                  genre: 'ግእዝ 1',
                  lyrics: [
                    { timestamp: 0, text: 'አንከርዎ ለማየ አንከርዎ(2)' },
                    { timestamp: 15, text: 'አእኩትዎ ለኢየሱስ(2)' }
                  ],
                },
                {
                  id: 93,
                  title: 'ከድንግል ተወልዶ',
                  artist: 'Zefinote Selam Sunday School',
                  cover_url: require('../assets/images/timket.jpg'),
                  audio_url: require('../assets/music/Kedingel_Tewwldo.opus'),
                  duration: 220,
                  genre: 'ግእዝ 1',
                  lyrics: [
                    { timestamp: 0, text: 'ከድንግል ተወልዶ እኛን ሊቀድስ ተጠመቀ ኢየሱስ ባሕረ ዮርዳኖስ (2)' },
                    { timestamp: 15, text: 'መጥምቁ ዮሐንስ ምንኛ ታደለ ከነቢያት ሁሉ ሥልጣኑ ከፍ ያለ' },
                    { timestamp: 30, text: 'ትንቢቱን ሊፈጽም አስቦ ክርስቶስ ተጠምቆ አዳነን በባሕረ ዮርዳኖስ' },
                    { timestamp: 45, text: 'ምሥጢረ ሥላሴ ታየ የዛን ዕለታ ምን ይከፈለዋል ለአምላክ ውለታ' },
                    { timestamp: 60, text: 'እመቤቴ ማርያም ምንኛ ታደልሽ ከአዳም ልጆች ሁሉ አንቺ ተመረጥሽ' },
                    { timestamp: 75, text: 'ቸሩ አባታችን መድኃኔዓለምን ኑ እናመስግነው በአንድነት ሆነን' }
                  ],
                },
                {
                  id: 94,
                  title: 'ጥምቀተ ባሕር',
                  artist: 'Zefinote Selam Sunday School',
                  cover_url: require('../assets/images/timket.jpg'),
                  audio_url: require('../assets/music/Timkete_Bahre.opus'),
                  duration: 240,
                  genre: 'ግእዝ 1',
                  lyrics: [
                    { timestamp: 0, text: 'ጥምቀተ ባሕር ዮርዳኖስ ነያ(2) ሃሌሉያ(4)' },
                    { timestamp: 15, text: 'ጌታችን ሲጠመቅ ባሕር ምን አለች አልችለውም ብላ ወደ ኋላ ሸሸች' },
                    { timestamp: 30, text: 'ብርሃነ መለኮት በወንዙ ሲሞላ ዮርዳኖስም ሸሸ ሄደ ወደ ኋላ' },
                    { timestamp: 45, text: 'አብ በመጣ ጊዜ ደመናውን ጭኖ መንፈስ ቅዱስ ታየ በራሱላይ ሆኖ' },
                    { timestamp: 60, text: 'ለልጁ ምስክር ሊሆን ፈለገና ቃሉን ተነገረ ሆኖ በደመና' },
                    { timestamp: 75, text: 'ጌታችን ሲጠመቅ በ30 ዓመት ባሕር ኮበለለች ግዑዟ ፍጥረት' },
                    { timestamp: 90, text: 'ሰማይ ተከፈተ ሆነልን ፀአዳ ምሥጢረ ሥላሴ ታወቀ ተረዳ' },
                    { timestamp: 105, text: 'እልል በይ ዮርዳኖስ የጥምቀት መገኛ የጽድቅ መሰላል የድኀነት መዋኛ' },
                    { timestamp: 120, text: 'ቀላያት አብህርት ብዙዎች እያሉ እንደምን ተመረጥሽ ዮርዳኖስ ከሁሉ' }
                  ],
                }
          ]
        },
        {
          id: 'yetimket_mezmur_sub3',
          name: 'ግእዝ 2',
          image: require('../assets/images/timket.jpg'), 
          songs: [
            {
              id: 95,
              title: 'ውስተ ማህጸነ ድንግል',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/timket.jpg'),
              audio_url: require('../assets/music/Weste_mahtsene_dengele_edited.opus'),
              duration: 140,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'ውስተ ማኅጸነ ድንግል ኅደረ ማኅጸነ ድንግል(2)' },
                { timestamp: 15, text: 'ሰማይ ወምድር ዘኢያገምሮ ሰማይ ወምድር ዘኢያገምሮ በማይ ተጠምቀ(2)' },
                { timestamp: 35, text: 'ትርጉም ሰማይና ምድር የማይችሉት አምላክ በእመቤታችን ማህጸን አደረ በውኃ ተጠመቀ' }
              ],
            },
            {
              id: 96,
              title: 'ልዑል እግዚአብሔር',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/timket.jpg'),
              audio_url: require('../assets/music/Leul_egziabher_yetmket_edited.opus'),
              duration: 120,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'ልዑል እግዚአብሔር (2)ምስጋና ይገባሃል(2)' },
                { timestamp: 15, text: 'ለጥምቀትህ በዓል (2)በሰላም በጤና አደረስከን(2)' }
              ],
            }
          ]
        },
        {
          id: 'yetimket_mezmur_sub4',
          name: 'ግእዝ 3',
          image: require('../assets/images/timket.jpg'), 
          songs: [
            {
                id: 97,
                title: 'ዮሐንስኒ ያጠምቅ',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/timket.jpg'),
                audio_url: require('../assets/music/Yohanesni_yatemk_edited.opus'),
                duration: 260,
                genre: 'ግእዝ 3',
                lyrics: [
                  { timestamp: 0, text: 'ዮሐንስኒ ያጠምቅ(2) በሄኖን (4)በማዕዶተ ዮርዳኖስ' },
                  { timestamp: 15, text: 'ዮሐንስ ሲያስተምር ያጠምቅ በጫካ በሜዳ ያጠምቅ' },
                  { timestamp: 30, text: 'የግመል ፀጉር ለብሶ ያጠምቅ ሆኖ ምድረ በዳ ያጠምቅ' },
                  { timestamp: 45, text: 'አምላኩን የሚወድ ያጠምቅ ብዙ ሰው እያለ ያጠምቅ' },
                  { timestamp: 60, text: 'ጌታውን ለማጥመቅ ያጠምቅ ዮሐንስ ታደለ ያጠምቅ' },
                  { timestamp: 75, text: 'ኮረብታው ይደልደል ያጠምቅ ጠማማውም ይቅና ያጠምቅ' },
                  { timestamp: 90, text: 'እያለ ሰበከ ያጠምቅ ሥርዓቱ ነውና ያጠምቅ' },
                  { timestamp: 105, text: 'ከኃጢአት ተለዩ ያጠምቅ በውኃ ተጠመቁ ያጠምቅ' },
                  { timestamp: 120, text: 'መንግሥተ ሰማያት ያጠምቅ እንዳለች እወቁ ያጠምቅ' }
                ],
              }
          ]
        }
      ]
    },
// ═══════════════════════════════════════════════════════
// CATEGORY 1
// ═══════════════════════════════════════════════════════
    {
      id: 'yekana_mezmur',
      name: 'የቃና መዝሙራት',
      icon: require('../icons/playlist.png'),
      color: '#FF6B6B',
      image: require('../assets/images/kanazegelila.png'), 
      subcategories: [

        {
          id: 'yekana_mezmur_sub1',
          name: 'እዝል ዓራራይ ቅኝት',
          image: require('../assets/images/kanazegelila.png'), 
          songs: [
                {
                  id: 98,
                  title: 'በከመ ሰማዕነ',
                  artist: 'Zefinote Selam Sunday School',
                  cover_url: require('../assets/images/kanazegelila.png'),
                  audio_url: require('../assets/music/Bekemesemayne.opus'),
                  duration: 110,
                  genre: 'እዝል ዓራራይ ቅኝት',
                  lyrics: [
                    { timestamp: 0, text: 'በከመ ሰማዕነ ከማሁ ርኢነ(2)' },
                    { timestamp: 10, text: 'ወይነ ቃና (3)በቤትከ ኮነ(2)' },
                    { timestamp: 20, text: 'ትርጉም እንደ ሰማነው እንዳየነው የቃና ወይን በቤትህ ሆነ' }
                  ],
                },
                {
                  id: 99,
                  title: 'እንዘ ስውር እምኔነ (ተአምረ ወመንክረ)',
                  artist: 'Zefinote Selam Sunday School',
                  cover_url: require('../assets/images/kanazegelila.png'),
                  audio_url: require('../assets/music/Enzesiwer_Tamre.opus'),
                  duration: 150,
                  genre: 'እዝል ዓራራይ ቅኝት',
                  lyrics: [
                    { timestamp: 0, text: 'እንዘ ስውር እምኔነ ይእዜሰ ክሡተ ኮነ (2)' },
                    { timestamp: 15, text: 'ተአምረ ወመንክረ ገብረ መድኃኒነ በቃና ዘገሊላ' },
                    { timestamp: 25, text: 'ከብካብ ኮነ ማየ ረስየ ወይነ(2)' },
                    { timestamp: 35, text: 'ትርጉም በኛ ዘንድ ስውር የነበረው የሚታይ ሆነ አስደናቂ ተአምራትን በቃና ዘገሊላ ውኃውን ወደ ወይን ለወጠው' }
                  ],
                },
                {
                  id: 100,
                  title: 'እንዘ ስውር እምኔነ (ወለማየኒ)',
                  artist: 'Zefinote Selam Sunday School',
                  cover_url: require('../assets/images/kanazegelila.png'),
                  audio_url: require('../assets/music/enzesiwr_emne.opus'),
                  duration: 130,
                  genre: 'እዝል ዓራራይ ቅኝት',
                  lyrics: [
                    { timestamp: 0, text: 'እንዘ ስውር እምኔነ ይእዜሰ ክሡተ ኮነ(2)' },
                    { timestamp: 15, text: 'ወለማየኒ ረሰዮ ወይነ ወለማየኒ ረሰዮ ወይነ (2)' },
                    { timestamp: 25, text: 'ትርጉም በኛ ዘንድ ስውር የነበረው የሚታይ ሆነ በቃና ዘገሊላ ውኃውን ወደ ወይን ለወጠው' }
                  ],
                },
                {
                  id: 101,
                  title: 'ተአምረ ወመንክረ',
                  artist: 'Zefinote Selam Sunday School',
                  cover_url: require('../assets/images/kanazegelila.png'),
                  audio_url: require('../assets/music/tamre_wemenkre_hana.opus'),
                  duration: 100,
                  genre: 'እዝል ዓራራይ ቅኝት',
                  lyrics: [
                    { timestamp: 0, text: 'ተአምረ ወመንክረ ገብረ መድኃኒነ(2)' },
                    { timestamp: 15, text: 'በቃና ዘገሊላ(2)ከብካብ ኮነ(2)' }
                  ],
                },
                {
                  id: 102,
                  title: 'ቃና ዘገሊላ',
                  artist: 'Zefinote Selam Sunday School',
                  cover_url: require('../assets/images/kanazegelila.png'),
                  audio_url: require('../assets/music/Kana_Zegelila.opus'),
                  duration: 280,
                  genre: 'እዝል ዓራራይ ቅኝት',
                  lyrics: [
                    { timestamp: 0, text: 'ቃና ዘገሊላ (2) በዚያ በሠርግ ቤት' },
                    { timestamp: 12, text: 'ተገኝተሻል ድንግል ከልጅሽ ጋራ ተገኝተአል ጌታ ከእናት ጋራ' },
                    { timestamp: 24, text: 'እድምተኞች ሞልተው የተጋበዙት ሲበሉ ሲጠጡ ወይኑ አልቆባቸው' },
                    { timestamp: 36, text: 'ድንግል እናታችን ቤዛዊት ዓለም አንቺው ደረሽለት ሆንሽው አማላጅ' },
                    { timestamp: 48, text: 'አንተ እያለህስ ማፈር የለባቸው ሁሉ ይቻልሃል ወይኑን ሙላላቸው' },
                    { timestamp: 60, text: 'ማድጋው ባዶ ነው ብለሽ የተናገርሽ ጌታን ያሳሰብሽው እመቤታችን ነሽ' },
                    { timestamp: 72, text: 'የጌታ አምላክነት የተገለጠበት ምንኛ ታደለ የነዶኪማስ ቤት' },
                    { timestamp: 84, text: 'ዛሬም ይኸው በዚህ በሠርገኞቹ ቤት በረከት ፈሰሰ በአምላክ ቸርነት' },
                    { timestamp: 96, text: 'ውኃው ተለውጦ የወይን ጠጅ ሲሆን በቃና ገሊላ ሁላችን አየን' },
                    { timestamp: 108, text: 'እግዚአብሔር ከኖረ በመካከላችን ሁሌ ይሰጠናል ይህን መሰል ወይን' }
                  ],
                }
              ]
        },
        {
          id: 'yekana_mezmur_sub2',
          name: 'ግእዝ 1',
          image: require('../assets/images/kanazegelila.png'), 
          songs: [
                {
                  id: 103,
                  title: 'በቃና ዘገሊላ',
                  artist: 'Zefinote Selam Sunday School',
                  cover_url: require('../assets/images/kanazegelila.png'),
                  audio_url: require('../assets/music/Bekana_Zegelila.opus'),
                  duration: 100,
                  genre: 'ግእዝ 1',
                  lyrics: [
                    { timestamp: 0, text: 'በቃና ዘገሊላ (2)' },
                    { timestamp: 10, text: 'ዘገሊላ ከብካብ ኮነ(2)' },
                    { timestamp: 20, text: 'ትርጉም በቃና ዘገሊላ ሠርግ ሆነ' }
                  ],
                },
                {
                  id: 104,
                  title: 'ዕዝራኒ ተናገራ',
                  artist: 'Zefinote Selam Sunday School',
                  cover_url: require('../assets/images/kanazegelila.png'),
                  audio_url: require('../assets/music/Ezrani_Tenagera.opus'),
                  duration: 110,
                  genre: 'ግእዝ 1',
                  lyrics: [
                    { timestamp: 0, text: 'ዕዝራኒ ተናገራ(2)' },
                    { timestamp: 15, text: 'ተናገራ ዳዊት ዘመራ ተናገራ ዘመራ ዳዊት(2)' }
                  ],
                },
                {
                  id: 105,
                  title: 'በክብር ዙፋኑ',
                  artist: 'Zefinote Selam Sunday School',
                  cover_url: require('../assets/images/kanazegelila.png'),
                  audio_url: require('../assets/music/Bekibir_Zufanu.opus'),
                  duration: 280,
                  genre: 'ግእዝ 1',
                  lyrics: [
                    { timestamp: 0, text: 'በክብር ዙፋኑ መርጦ ያስቀመጠሽ ለእኛ ለኃጢአተኞች ተስፋችን አንቺ ነሽ' },
                    { timestamp: 15, text: 'በፍጹም ትህትና ቤተ መቅደስ ያደግሽ የአማኑኤል የጌታዬ የፈጣሪ እናት በምን እንመስልሽ' },
                    { timestamp: 35, text: 'ቃና ዘገሊላ ሠርግ ደግሰው አንቺን ከነልጅሽ በክብር ጠርተው' },
                    { timestamp: 50, text: 'ሰዎች ተረብሸው በጣም ተደናግጠው ወይኑ በማለቁ በፍርሃት ተውጠው' },
                    { timestamp: 65, text: 'ወይኑ በመሀል ማለቁን ሰምተሽ ድንጋጤያቸውን እመቤቴ አይተሽ' },
                    { timestamp: 80, text: 'ወደ ልጅሽ ሄደሽ ብትጠይቂላቸው ጋኑን ውኃ ሙሉት ብሎ አዘዛቸው' },
                    { timestamp: 95, text: 'የሚላችሁንም አድርጉ ብለሽ ሰዎቹን ከእፍረት ከጭንቅ የሰወርሽ' },
                    { timestamp: 110, text: 'ድንግል እመቤቴ ቤዛዊት ዓለም በመከራ ደራሽ እንዳንቺ የለም' },
                    { timestamp: 125, text: 'ውኃውን ወደ ወይን አጣፍጦ ቀይሮ የዶኪማስንም እፍረቱን ሰውሮ' },
                    { timestamp: 140, text: 'እድምተኞች ሁሉ እስኪደነቁ አምላክ ከእነርሱ ጋር መሆኑን አወቁ' }
                  ],
                }
              ]
        },
        {
          id: 'yekana_mezmur_sub3',
          name: 'ግእዝ 2',
          image: require('../assets/images/kanazegelila.png'), 
          songs: [
                {
                  id: 106,
                  title: 'በቃና ዘገሊላ ማየ',
                  artist: 'Zefinote Selam Sunday School',
                  cover_url: require('../assets/images/kanazegelila.png'),
                  audio_url: require('../assets/music/Bekana_Zegelila.opus'),
                  duration: 120,
                  genre: 'ግእዝ 2',
                  lyrics: [
                    { timestamp: 0, text: 'በቃና ዘገሊላ ማየ ወይነ ረስየ(2)' },
                    { timestamp: 15, text: 'መዓዛ ቃልከ ይትወከፍ ጸሎትየ (2)' },
                    { timestamp: 30, text: 'ትርጉም በቃና ዘገሊላ ውኃው ወይን አደረገ የቃል መዓዛ ልመናዬን ይቀበል' }
                  ],
                },
                {
                  id: 107,
                  title: 'አዳምን ያልተወው',
                  artist: 'Zefinote Selam Sunday School',
                  cover_url: require('../assets/images/kanazegelila.png'),
                  audio_url: require('../assets/music/Adamn_Yaltewew.opus'),
                  duration: 220,
                  genre: 'ግእዝ 2',
                  lyrics: [
                    { timestamp: 0, text: 'አዳምን ያልተወው እንደተሰደደ እሰይ የምሥራች ዛሬ ተወለደ(2)' },
                    { timestamp: 15, text: 'አምላካችን መድኃኒታችን ተወለደ ለነፃነታችን(2)' },
                    { timestamp: 30, text: 'አዳምን ያልተወው እንደተጨነቀ እሰይ የምሥራች ዛሬ ተጠመቀ' },
                    { timestamp: 45, text: 'አዳም ሊጠራ የመጣው ሙሽራ በገሊላ መንደር ለሠርግ ተጠራ' },
                    { timestamp: 60, text: 'ሠርግ ቤት እንዳለ በክብር ተቀምጦ የወይን ጠጅ ሆነ ውኃው ተለውጦ' },
                    { timestamp: 75, text: 'እጅግ ያስደንቃል የጌታችን ሥራ በገሊላ መንደር ይህን ተአምር ሲሠራ' },
                    { timestamp: 90, text: 'ጌታችን አንድ ቀን ያደረገው ተአምር ሲያስደንቅ ይኖራል ይህን ሁሉ ፍጡር' }
                  ],
                }
              ]
        },
      ]
    },

// // ═══════════════════════════════════════════════════════
// // CATEGORY 1
// // ═══════════════════════════════════════════════════════
//     {
//       id: 'kirkosweeyeluta_mezmur',
//       name: 'የሰማዕቱ ቅዱስ ቂርቆስ እና የእናቱ መዝሙራት',
//       icon: require('../icons/playlist.png'),
//       color: '#FF6B6B',
//       image: require('../assets/images/kirkos.jpg'), 
//       subcategories: [

//         {
//           id: 'kirkosweeyeluta_mezmur_sub1',
//           name: 'እዝል ዓራራይ ቅኝት',
//           image: require('../assets/images/silase.jpg'), 
//           songs: [
//                 {
//                   id: 108,
//                   title: 'ጊዜ እረፍቱ ለቅዱስ ቂርቆስ',
//                   artist: 'Zefinote Selam Sunday School',
//                   cover_url: require('../assets/images/silase.jpg'),
//                   // audio_url: 'TODO: add local file for song id 108',
//                   duration: 110,
//                   genre: 'ግእዝ',
//                   lyrics: [
//                     { timestamp: 0, text: 'ጊዜ እረፍቱ ለቅዱስ ቂርቆስ(2)' },
//                     { timestamp: 15, text: 'እም ልዕልና ወረደ እግዚአብሔር (2)' },
//                     { timestamp: 30, text: 'ትርጉም ጊዜ እረፍቱ ለቅዱስ ቂርቆስ(2) በልዕልና ወረደ እግዚአብሔር (2)' }
//                   ],
//                 },
//                 {
//                   id: 109,
//                   title: 'ጊዜ እረፍታ ለኢየሉጣ',
//                   artist: 'Zefinote Selam Sunday School',
//                   cover_url: require('../assets/images/silase.jpg'),
//                   audio_url: require('../assets/music/Gize_Erefta.opus'),
//                   duration: 110,
//                   genre: 'ግእዝ',
//                   lyrics: [
//                     { timestamp: 0, text: 'ጊዜ እረፍታ ለኢየሉጣ(2)' },
//                     { timestamp: 15, text: 'እም ልዕልና ወረደ እግዚአብሔር (2)' },
//                     { timestamp: 30, text: 'ትርጉም ጊዜ እረፍቷ ለኢየሉጣ(2) በልዕልና ወረደ እግዚአብሔር (2)' }
//                   ],
//                 },
//                 {
//                   id: 110,
//                   title: 'ሕጻን ወእሙ',
//                   artist: 'Zefinote Selam Sunday School',
//                   cover_url: require('../assets/images/silase.jpg'),
//                   // audio_url: 'TODO: add local file for song id 110',
//                   duration: 140,
//                   genre: 'ግእዝ/አማርኛ',
//                   lyrics: [
//                     { timestamp: 0, text: 'ሕጻን ወእሙ (3) ክልኤሆሙ ፈጸሙ ገድሎሙ(2)' },
//                     { timestamp: 15, text: 'ሕጻን ንዑስ(3) ዘኢየፈርኃ ትእዛዘ ንጉሥ(2)' },
//                     { timestamp: 30, text: 'ትርጉም ሕጻንና እናቱ(ቂርቆስ እና ኢየሉጣ) ሁለቱም ገድላቸውን ፈጸሙ ሕጻን ቂርቆስ የንጉሡን ትእዛዝ አልፈራም' }
//                   ],
//                 },
//                 {
//                   id: 111,
//                   title: 'ቂርቆስ ከእናቱ ጋር',
//                   artist: 'Zefinote Selam Sunday School',
//                   cover_url: require('../assets/images/silase.jpg'),
//                   // audio_url: 'TODO: add local file for song id 111',
//                   duration: 100,
//                   genre: 'አማርኛ',
//                   lyrics: [
//                     { timestamp: 0, text: 'ቂርቆስ ከእናቱ ጋር በእሳት ሲጣሉ (2)(2)' },
//                     { timestamp: 15, text: 'ውኃ ሆነ ጠፋ ነበልባሉ(2)' }
//                   ],
//                 },
//                 {
//                   id: 112,
//                   title: 'ቂርቆስ አስተማረ',
//                   artist: 'Zefinote Selam Sunday School',
//                   cover_url: require('../assets/images/silase.jpg'),
//                   // audio_url: 'TODO: add local file for song id 112',
//                   duration: 100,
//                   genre: 'አማርኛ',
//                   lyrics: [
//                     { timestamp: 0, text: 'ቂርቆስ አስተማረ ቃለ ክርስቶስ(2)(2)' },
//                     { timestamp: 15, text: 'ፈጽሞ ሳይፈራ ነገሥታተ (2)ምድር(2)' }
//                   ],
//                 },
//                 {
//                   id: 113,
//                   title: 'ቂርቆስ አማልደን',
//                   artist: 'Zefinote Selam Sunday School',
//                   cover_url: require('../assets/images/silase.jpg'),
//                   // audio_url: 'TODO: add local file for song id 113',
//                   duration: 120,
//                   genre: 'አማርኛ',
//                   lyrics: [
//                     { timestamp: 0, text: 'ቂርቆስ አማልደን ከአምላካችን (2)' },
//                     { timestamp: 15, text: 'እንዳንጠፋ እንዳንሞት በነፍሳችን አደራህን ቁምልን ከጎናችን(2)' }
//                   ],
//                 },
//                 {
//                   id: 114,
//                   title: 'ይቤላ ሕጻን ለእሙ',
//                   artist: 'Zefinote Selam Sunday School',
//                   cover_url: require('../assets/images/silase.jpg'),
//                   // audio_url: 'TODO: add local file for song id 114',
//                   duration: 160,
//                   genre: 'ግእዝ/አማርኛ',
//                   lyrics: [
//                     { timestamp: 0, text: 'ይቤላ ሕጻን ለእሙ ኢትፍርሒ እም(2)ነበልባለ እሳት(2)' },
//                     { timestamp: 15, text: 'ለአናንያ ወአዛርያ ወሚሳኤል ዘአድኀኖሙ ውእቱ ያድኀነነ(2)' },
//                     { timestamp: 30, text: 'ሕጻኑ ለእናቱ አላት እናቴ ሆይ አትፍሪ (2)የእሳቱን ነበልባል(2)' },
//                     { timestamp: 45, text: 'አናንያን አዛርያን ሚሳኤልን ያዳናቸው እኛንም ያድነናል(2)' }
//                   ],
//                 },
//                 {
//                   id: 115,
//                   title: 'የጻድቃን መዓዛ',
//                   artist: 'Zefinote Selam Sunday School',
//                   cover_url: require('../assets/images/silase.jpg'),
//                   // audio_url: 'TODO: add local file for song id 115',
//                   duration: 100,
//                   genre: 'አማርኛ',
//                   lyrics: [
//                     { timestamp: 0, text: 'የጻድቃን መዓዛ ደስ ይላል እንደ ጽጌረዳ(2)' },
//                     { timestamp: 15, text: 'ያድነናል(3)ከኃጢአት ፍዳ(2)' }
//                   ],
//                 },
//                 {
//                   id: 116,
//                   title: 'ርዕዩ ዕበዮ',
//                   artist: 'Zefinote Selam Sunday School',
//                   cover_url: require('../assets/images/silase.jpg'),
//                   // audio_url: 'TODO: add local file for song id 116',
//                   duration: 150,
//                   genre: 'ግእዝ/አማርኛ',
//                   lyrics: [
//                     { timestamp: 0, text: 'ርዕዩ ዕበዮ ለቅዱስ ቂርቆስ(2)' },
//                     { timestamp: 15, text: 'ዕውራን ይሬእዩ ወጽሙማን ይሰምዑ እለ ለምጽ ይነጽሑ እለ መጽሑ ኅቤሁ (2)' },
//                     { timestamp: 30, text: 'ትርጉም ኑ እዩ የቂርቆስን ተአምራት(2) እውራን ያያሉ ደንቆሮች ይሰማሉ ለምጻሞችም ይነጻሉ ወደ እርሱ የመጡ ሁሉ (2)' }
//                   ],
//                 },
//                 {
//                   id: 117,
//                   title: 'ደምረነ ምስለ ኵሎሙ ቅዱሳን',
//                   artist: 'Zefinote Selam Sunday School',
//                   cover_url: require('../assets/images/silase.jpg'),
//                   // audio_url: 'TODO: add local file for song id 117',
//                   duration: 180,
//                   genre: 'ግእዝ',
//                   lyrics: [
//                     { timestamp: 0, text: 'ደምረነ ምስለ ኵሎሙ ቅዱሳን ምስለ እለ ገብሩ ፈቃድከ እለ እምዓለም አስመሩከ(2)' },
//                     { timestamp: 20, text: 'እለ አቀቡ በንጽሕ ሥርዓተ ቤትከ ወእለ ሰበኩ በሠናይ (2) በሠናይ ዜናከ(2)' }
//                   ],
//                 },
//                 {
//                   id: 118,
//                   title: 'ጻድቃን ብሩካን',
//                   artist: 'Zefinote Selam Sunday School',
//                   cover_url: require('../assets/images/silase.jpg'),
//                   // audio_url: 'TODO: add local file for song id 118',
//                   duration: 260,
//                   genre: 'አማርኛ/ግእዝ',
//                   lyrics: [
//                     { timestamp: 0, text: 'ጻድቃን ብሩካን ዓለምን ንቃችሁ የክርስቶስን ፈለግ የተከተላችሁ' },
//                     { timestamp: 15, text: 'በመንግሥተ ሰማይ እጥፍ ነው ዋጋችሁ ሰአሉ ለነ አስተምሕሩ ለነ' },
//                     { timestamp: 30, text: 'እስመ በጸሎተ ጻድቅ ትድኅን ሀገረ ቀዳሜ ሰማዕት እስጢፋኖስ ዲያቆን' },
//                     { timestamp: 45, text: 'ወቅዱስ ጊዮርጊስ መክብበ አሜን ምስለ ኢየሉጣ ወቂርቆስ ሕጻን' },
//                     { timestamp: 60, text: 'ዕሥራ ወአርባዕቱ ካህናተ ሰማይ ዐጠንተ መንበሩ ለአምላክ አዶናይ' },
//                     { timestamp: 75, text: 'መንበረ ጸባኦት በላዕላይ ገብረ መንፈስ ቅዱስ ዘእም አቅሌስያ' },
//                     { timestamp: 90, text: 'ወተክለሃይማኖት ዘኢትዮጵያ ወማርቆስ አብ ዘእስክንድርያ' }
//                   ],
//                 }
//               ]
//             },
//         {
//           id: 'kirkosweeyeluta_mezmur_sub2',
//           name: 'ግእዝ 1',
//           image: require('../assets/images/silase.jpg'), 
//           songs: [
//                 {
//                   id: 119,
//                   title: 'መንክር እግዚአብሔር',
//                   artist: 'Zefinote Selam Sunday School',
//                   cover_url: require('../assets/images/silase.jpg'),
//                   // audio_url: 'TODO: add local file for song id 119',
//                   duration: 130,
//                   genre: 'ግእዝ/አማርኛ',
//                   lyrics: [
//                     { timestamp: 0, text: 'መንክር እግዚአብሔር (2) በላዕለ ቅዱሳኒሁ(3) መንክር እግዚአብሔር(2)' },
//                     { timestamp: 15, text: 'ድንቅ ነው የእግዚአብሔር ሥራ(2) በቅዱሳኑ አድሮ የሚኖረው ድንቅ ነው የእግዚአብሔር ሥራ (2)' }
//                   ],
//                 },
//                 {
//                   id: 120,
//                   title: 'ቂርቆስኒ ወኢየሉጣ',
//                   artist: 'Zefinote Selam Sunday School',
//                   cover_url: require('../assets/images/silase.jpg'),
//                   // audio_url: 'TODO: add local file for song id 120',
//                   duration: 120,
//                   genre: 'ግእዝ/አማርኛ',
//                   lyrics: [
//                     { timestamp: 0, text: 'ቂርቆስኒ ወኢየሉጣ ጸንዑ በእምነቶሙ(2)' },
//                     { timestamp: 15, text: 'ወበእምነቶሙ (3)ወረሱ መንግሥተ ሰማያት(2)' },
//                     { timestamp: 30, text: 'ትርጉም ሰማዕቱ ቂርቆስና እናቱ ኢየሉጣ በእምነታቸው ጸኑ መንግሥተ ሰማያትን ወረሱ' }
//                   ],
//                 }
//               ]
//             },
//         {
//           id: 'kirkosweeyeluta_mezmur_sub3',
//           name: 'ግእዝ 2',
//           image: require('../assets/images/silase.jpg'), 
//           songs: [
//                 {
//                   id: 121,
//                   title: 'ቂርቆስ ሕጻን',
//                   artist: 'Zefinote Selam Sunday School',
//                   cover_url: require('../assets/images/silase.jpg'),
//                   // audio_url: 'TODO: add local file for song id 121',
//                   duration: 100,
//                   genre: 'ግእዝ',
//                   lyrics: [
//                     { timestamp: 0, text: 'ቂርቆስ ሕጻን አንጌቤናዊ(2)' },
//                     { timestamp: 15, text: 'ቂርቆስ ሕጻን ወልደ አንጌቤናዊት(2)' }
//                   ],
//                 }
//               ]
//             },
//           ]
//         },
    // ═══════════════════════════════════════════════════════
    // CATEGORY 1
    // ═══════════════════════════════════════════════════════
    {
      id: 'zemawi_mezmurat',
      name: 'የዘመነ መርዕዊ መዝሙራት',
      icon: require('../icons/playlist.png'),
      color: '#FF6B6B',
      image: require('../assets/images/mushra.jpg'), 
      subcategories: [

        {
          id: 'ezil_araray',
          name: 'እዝል ዓራራይ ቅኝት',
          image: require('../assets/images/mushra.jpg'), 
          songs: [
            {
              id: 122,
              title: 'መጽአ ዘመጽአ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mushra.jpg'),
              audio_url: require('../assets/music/Mesa_Zemesa.opus'),
              duration: 120,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'መጽአ ዘመጽአ እምላእሉ/2/' },
                { timestamp: 15, text: 'መርዓዊ መጽአ /2/ተቀበሉ ጻኡ ተቀበሉ/2/' }
              ],
            },
            {
              id: 123,
              title: 'መጽአ መርዓዊ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mushra.jpg'),
              audio_url: require('../assets/music/Mesa_Merawi.opus'),
              duration: 110,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'መጽአ መራዊ ፍስሃ ለኩሉ/2/ በሰላም ጻኡ ተቀበሉ/2/' },
                { timestamp: 15, text: 'ትርጉም፡ መጣ ሙሽራ የሁላችን ደስታ/2/ በሰላም ዉጡ ተቀበሉ/2/' }
              ],
            },
            {
              id: 124,
              title: 'ደስ አላት ቤተክርስቲያን',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mushra.jpg'),
              audio_url: require('../assets/music/Desalate.opus'),
              duration: 130,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ደስ አላት ቤተክርስቲያን በጣም ደስ አላት /2/' },
                { timestamp: 15, text: 'ሙሽሪት ሙሽራው ልጆቿ/2/ በተክሊል በቁርባን ተዋሐዱላት /2/' }
              ],
            },
            {
              id: 125,
              title: 'መርዓዊ ሰማያዊ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mushra.jpg'),
              audio_url: require('../assets/music/Merawi_Semayawi.opus'),
              duration: 260,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'መርዓዊ ሰማያዊ /2/ ለእመ ገብረ በዓለ/2/ ይኑሩ በሰላም /3/ ጸንተው ዘለዓለም/2/' },
                { timestamp: 30, text: 'ደናግል ተነሡ ያዙ መብራቱን ሙሽሪው ደረሰ አጉል እንዳንሆን' },
                { timestamp: 50, text: 'ወንጌልን ይዘዋል ጐዳናቸው ያምራል ዓላማው መልካም ነው እነእርሱን እንምሰል' },
                { timestamp: 70, text: 'የድካም ዋጋቸው /2/ ብርሃንን ያበራል በሀይማኖታቸው' },
                { timestamp: 90, text: 'የሙሽራው ሕይወት መልካም እንዲሆን ካህኑ ይባርኩት ቡሩክ ሰው ይሁን' },
                { timestamp: 110, text: 'የሙሽሪት ሕይወት መልካም እንዲሆን ካህኑ ይባርኳት ቡርክት ትሁን' }
              ],
            },
            {
              id: 126,
              title: 'ካህናት ተንሥኡ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mushra.jpg'),
              audio_url: require('../assets/music/Kahnat_Tensu.opus'),
              duration: 100,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ካህናት ተንሥኡ/2/ ለተናብቦ /2/' },
                { timestamp: 15, text: 'እንዘ ይብሉ ንሴብሖ/2/እንዘ ይብሉ ንሴብሖ/2/' }
              ],
            },
            {
              id: 127,
              title: 'ድንቅ ነው በጣም',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mushra.jpg'),
              audio_url: require('../assets/music/Dink_New_Betam.opus'),
              duration: 280,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ድንቅ ነው በጣም ድንቅ ነው/2/ በሰርጋቸው ዕለት ተገኘ መድኃኒዓለም' },
                { timestamp: 20, text: 'በሠርጋቸው እለት ተገኘች ድንግል ማርያም' },
                { timestamp: 40, text: 'በቃልህ ተመርተው ለዚህ ቀን በቅተዋል በፊትህ ጋብቻን ይኸው ፈጽመዋል' },
                { timestamp: 60, text: 'በፈሰሰው ደምህ ኅብረት መስርተዋል በሥጋም በነፍስም /2/የአንተ ነን ብለዋል' },
                { timestamp: 80, text: 'ከአዳም አንድ አጥንት ከጐኑ ወስደህ አጋር እንድትሆነው ሔዋንን ሰጠህ' },
                { timestamp: 100, text: 'ሁለቱንም ባርከህ እንደፈጠርካቸው ዛሬም ለሙሽሮች/2/ ሰላምን ስጣቸው' },
                { timestamp: 120, text: 'ጌታ ሆይ በሕግህ በቃልህ መሰረት አንድ ሆነዋልና በዚህች ቅድስት እለት' },
                { timestamp: 140, text: 'እርሱንም እሷንም ባርከህ ቀድሳቸው ዘለዓለማዊ ፍቅር /2/ ይኑር በልባቸው' },
                { timestamp: 160, text: 'የዲያቢሎስ ተንኮል እንዳያስታቸው እስከመጨረሻው ጋሻ ሁንላቸው' },
                { timestamp: 180, text: 'ከቅድስቲቷ ቤት ሁለቱም ሳይርቁ ጽናቱን ስጣቸው /2/ አብረው እንዲዘልቁ' }
              ],
            },
            {
              id: 128,
              title: 'ደስ ይበለን(አመላለስ)',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mushra.jpg'),
              audio_url: require('../assets/music/Des_yibelen_amelales_edited.opus'),
              duration: 240,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ወንድና ሴት አድርጐ እንደፈጠራቸው ኋላም ለኑሮአቸው ጋብቻን ሰጣቸው' },
                { timestamp: 20, text: 'አንዴ ከተጋቡ አንድ ሥጋ ናቸው ከእንግዲህ ወደፊት ይጸናል ፍቅራቸው' },
                { timestamp: 40, text: 'ደስ ይበለን ሙሽሪት ሙሽራው/2/' },
                { timestamp: 60, text: 'አንድ አካል ሆነዋል አምላክ አጣምሮአቸው በምንም ምክንያት ማንም አይለያቸው' },
                { timestamp: 80, text: 'በጣም ይወዳታል ክብርት ሚስቱን ስለ እርሷ አሳልፎ ይሰጣል ነፍሱን' },
                { timestamp: 100, text: 'ለአብርሃም ለሣራ እንደሰጠ ትዳር ለእናንተም ይለግስ የዘለዓለም ፍቅር' },
                { timestamp: 120, text: 'አንቺም እንደ ሣራ አንተም እንደ አብርሃም ተፋቅራችሁ ኑሩ እስከ ዘለዓለም' },
                { timestamp: 140, text: 'ለዚህ ላበቃችሁ ለቸሩ አምላካችን ምስጋና ይድረሰው ዛሬ ከሁላችን' },
                { timestamp: 160, text: 'በሉ ደኅና ግቡ ወደ አዲስ ጎጆአችሁ አምላክ በጥበቡ ፍቅርን ያላብሳችሁ' }
              ],
            },
            {
              id: 129,
              title: 'ቃና ዘገሊላ (Wedding Version)',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mushra.jpg'),
              audio_url: require('../assets/music/Kana_Zegelila.opus'),
              duration: 300,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ቃና ዘገሊላ/2/በዚያ በሠርግ ቤት ተገኝተሻል ድንግል ከልጅሽ ጋራ ተገኝተሃል ጌታ ከእናትህ ጋራ' },
                { timestamp: 30, text: 'እድምተኞች ሞልተው የተጋበዙት ሲበሉ ሲጠጡ ወይኑ አልቆበት ድንግል እናታችን ቤዛዊት ዓለም አንቺ ደረስሽለት ሆንሽው አማላጅ' },
                { timestamp: 60, text: 'አንተ እያለህስ ማፈር የለባቸው ሁሉ ይቻልሃል ወይኑን ሙላላቸው' },
                { timestamp: 90, text: 'ማድጋው ባዶ ነው ብለሽ የተናገርሽ ጌታን ያሳሰብሽው እመቤታችን ነሽ' },
                { timestamp: 120, text: 'የጌታ አምላክነት የተገለጸበት ምንኛ ታደለ የእነ ዶኪማስ ቤት' },
                { timestamp: 150, text: 'ዛሬም ይኸው በዚህ በሠርገኞቹ ቤት በረከት ፈሠሠ በአምላክ ቸርነት' },
                { timestamp: 180, text: 'ውኃው ተለውጦ የወይን ጠጅ ሲሆን በቃና ገሊላ ሁላችን አየን' },
                { timestamp: 210, text: 'እግዚአብሔር ከኖረ በመካከላችን ሁሉ  ይሰጠናል ይህን መሰል ወይን' }
              ],
            },
            {
              id: 130,
              title: 'ደመቀ አበራልን',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mushra.jpg'),
              audio_url: require('../assets/music/Demeke_aberalen_edited.opus'),
              duration: 250,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ደመቀ አበራልን የአማኑኤል ሥራ/2/ ሙሽሮቹ ሆኑ አብርሃም ወሣራ' },
                { timestamp: 25, text: 'በቤተክርስቲያን ጥላ ተከልለው ተክሊል አድርገዋል ሙሽሪት ሙሽራው' },
                { timestamp: 50, text: 'ጸጋ መንፈስ ቅዱስ ስለተሰጣቸው ሙሽሪት ሙሽራው አበራ ገፃቸው' },
                { timestamp: 75, text: 'የተራራቀ አካል አንድ ሆነ በተክሊል እግዚአብሔር ይመስገን እልል/2/ እንበል' },
                { timestamp: 100, text: 'አጥንትሽ ከአጥንቴ ሥጋሽ ከሥጋዬ አዳም የሰበከው ይኸው ዛሬ ታዬ' },
                { timestamp: 125, text: 'የተክሊል ብርሃን በእኛ መሀል በርቶ ረቂቅ አንድነት ታየ በእርሷ ጐልቶ' },
                { timestamp: 150, text: 'ይህን ድንቅ ነገር ለማየት ያበቃን ምሥጢሩን የሚገልጽ እግዚአብሔር ይመስገን' },
                { timestamp: 175, text: 'ነጭ መጐናጸፊያ በአንድ ተጐናጽፈው በመንፈስ ቅዱስ ኃይል አረፉ በጥላው' },
                { timestamp: 200, text: 'ሙሽሪት ሙሽራው ለፍቅር ተሸነፉ ለቁርባን መቁረቢያ ነጭ ልብስ አሰፉ' }
              ],
            },
            {
              id: 131,
              title: 'መርዓዊ ስቡሕ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mushra.jpg'),
              audio_url: require('../assets/music/Merawi_Sibuh.opus'),
              duration: 100,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'መርዓዊ ስቡሕ ዘለዓለም/2/ ወእስከለዓለም /2/ ንጉሥ ውእቱ /2/' }
              ],
            },
            {
              id: 132,
              title: 'ሁለቱም አንድ ሆኑ ዛሬ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mushra.jpg'),
              audio_url: require('../assets/music/Huletum_And_Honu_Zare_edited.opus'),
              duration: 240,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ሁለቱም አንድ ሆኑ ዛሬ/2/ በእግዚአብሔር በሕያው ቃሉ ሁለቱም አንድ ሆኑ ዛሬ' },
                { timestamp: 20, text: 'ወንድና ሴት አድርጐ እንደፈጠራቸው በኋላም በቃሉ አንድ አደረጋቸው' },
                { timestamp: 40, text: 'እናትና አባቱን የአዳም ልጅ ይተዋል ከሚስቱ ጋር በሰላም በአንድ ይተባበራል' },
                { timestamp: 60, text: 'ሁለቱም አንድ ሥጋ ሆነው ይኖራሉ ብሎ አስተምሮናል ጌታችን በቃሉ' },
                { timestamp: 80, text: 'አንድ ሥጋ ናቸው አይደሉም ሁለት የባልና የሚስት ሕይወት ወደፊት' },
                { timestamp: 100, text: 'እንግዲህ እግዚአብሔር ካጣመራችሁ በሆነው ባልሆነው ሰው አይለያችሁ' },
                { timestamp: 120, text: 'ለወገኖቻችሁ ምሣሌ ሆናችሁ በክርስትና ፍቅር አምላክ ያኑራችሁ' },
                { timestamp: 140, text: 'ምንጣፋችሁ ብሩህ መኝታችሁ ንፁህ ስለሆነላችሁ እንኳን ደስ አላችችሁ' },
                { timestamp: 160, text: 'ዓለም እንዲደነቅ ሰይጣን እንዲያፍር በሀዘን በደስታ ይኑራችሁ ፍቅር' }
              ],
            },
            {
              id: 133,
              title: 'ደስ አለው ጌታ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mushra.jpg'),
              audio_url: require('../assets/music/Des_ale_geta_edited.opus'),
              duration: 120,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ደስ አለው ጌታ በሙሽሮች ደስ አለው ጌታ/2/' },
                { timestamp: 15, text: 'በቅዱስ ቁርባን ተወስነው ደስ አለው ጌታ/2/' },
                { timestamp: 30, text: 'ደስ አላት ድንግል በሙሽሮች ደስ አላት ድንግል /2/' },
                { timestamp: 45, text: 'በቅዱስ ቁርባን ተወስነው ደስ አላት ድንግል /2/' }
              ],
            },
            {
              id: 134,
              title: 'ኢያቄም ወሐና',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mushra.jpg'),
              audio_url: require('../assets/music/Eyakemwehana_Mushrochu.opus'),
              duration: 100,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ኢያቄም ወሐና/4/ ሙሽሮቹ ያብባሉ ገና/2/' }
              ],
            },
            {
              id: 135,
              title: 'ኑ ተመልከቱልኝ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mushra.jpg'),
              // audio_url: 'TODO: add local file for song id 135',
              duration: 240,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ኑ ተመልከቱልኝ የአማኑኤልን ሥራ/2/ ኑ ተመልከቱልኝ የእመቤቴን ሥራ' },
                { timestamp: 20, text: 'ሙሽሮቹ ሆኑ አብርሃም ወሣራ/2/' },
                { timestamp: 40, text: 'ሐናና ኢያቄም በጸሎት ቢተጉ በፈጣሪያቸው ፊት መልካሙን ቢያደርጉ' },
                { timestamp: 60, text: 'በቅዱስ ጋብቻ ጸንተው ቢራመዱ የአምላክን እናት ድንግልን ወለዱ/2/' },
                { timestamp: 80, text: 'ቀን ከሌት ሲጸልይ ዘካርያስ ካህን ኤልሣቤጥም ተግታ ፈጣሪን ብትለምን' },
                { timestamp: 100, text: 'በእግዚአብሔር ፈቃድ በስተ እርጅናቸው ቅዱስ ዩሐንስን አክብሮ ሠጣቸው/2/' },
                { timestamp: 120, text: 'ጸጋ ዘአብና ቅድስት እግዚእኀረያ ለመልካም ጋብቻ ሆነዋል አርዓያ' },
                { timestamp: 140, text: 'ተክለሃይማኖትን ጻድቁን ያገኙት ቀን ከሌት ተግተው ነው በጾምና ጸሎት/2/' }
              ],
            },
            {
              id: 136,
              title: 'ንጽሕት ድንግል',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mushra.jpg'),
              audio_url: require('../assets/music/Netsehet_dengel_edited.opus'),
              duration: 280,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ንጽሕት ድንግል ቡርክት የእምላክ እናት እመቤት ልጆችሽ ሙሽሮች ሁለቱም አንድ ሆኑ' },
                { timestamp: 20, text: 'ተዋሐዱ ተጣመሩ በቅዱስ ቁርባኑ/2/' },
                { timestamp: 40, text: 'ፍጹም መንፈሳዊ ልዩ ፍቅር አንቺ ያለሽበት መልካም ትዳር' },
                { timestamp: 60, text: 'መሠረቱ ዛሬ ልጆችሽ ቅድስት ሆይ ባርኪያቸው ተገኝተሽ' },
                { timestamp: 80, text: 'ድንግል ጐጆአቸውን ቀድሰሽ እውነተኛ ፍቅር መሥርተሽ' },
                { timestamp: 100, text: 'በመካከላቸው ተገኝተሽ ሁሉን አሰጪያቸው አማልደሽ' },
                { timestamp: 120, text: 'ሙሽሮቹም አምነው በምልጃሽ እናታችን ባርኪን ነይ ሲሉሽ' },
                { timestamp: 140, text: 'ፈጥነሽ ድረሺና በሠርጋቸው ነይ ተመላለሺ መሀላቸው' },
                { timestamp: 160, text: 'አንቺን ለሚወዱሽ ለሚያምኑሽ የሕይወት አጣፋጭ ቅመም ነሽ' },
                { timestamp: 180, text: 'ሙሽሮቹም ዛሬ ይጠሩሻል የጐጆአችን ፋና ነይ ይሉሻል' },
                { timestamp: 200, text: 'ቃና ዘገሊላ ተገኝተሽ መልካሙን ጋብቻ የባረክሽ ዛሬም ከልጅሽ ጋር በሠርጋቸው ነይ ተመላለሽ መሃላቸው' }
              ],
            },
            {
              id: 137,
              title: 'ወእመአኮ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mushra.jpg'),
              audio_url: require('../assets/music/Weemeako.opus'),
              duration: 100,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ወእመአኮ ከመወሬዛ ኃየል/2/ ትዌድሶ መርዓት እንዘትብል/4/' }
              ],
            },
            {
              id: 138,
              title: 'ንሴብሖ ለአምላከ እዝራ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mushra.jpg'),
              audio_url: require('../assets/music/Nisebho_Leamlake_Ezra.opus'),
              duration: 120,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ንሴብሖ /2/ ለአምላከ እዝራ(2) እርሱን ለፈጠረ እርሷንም ለሠራ/2/' },
                { timestamp: 20, text: 'ንሴብሖ ለአምላከ እዝራ' }
              ],
            },
            {
              id: 139,
              title: 'እልል እልል ደስ ይበለን',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mushra.jpg'),
              audio_url: require('../assets/music/Ellell_Desyibelene.opus'),
              duration: 260,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'እልል እልል ደስ ይበለን/2/ አጅበን መጣን ሙሽሮቹን እልል ብላችሁ ተቀበሉን/2/' },
                { timestamp: 30, text: 'እናንተ ሙሽሮች እንኳን ደስ አላችሁ/2/ የአብርሃም የሣራ ይሁን ጋብቻችሁ' },
                { timestamp: 55, text: 'መልካም መተሣሳብ ክርስቶስ ይስጣችሁ/2/ ሣራና አብርሃም ሁሉም የሚያውቋቸው' },
                { timestamp: 80, text: 'ሁለቱም ቅዱሳኖች ናቸው/2/ ፍቅራቸውን አይቶ አምላክ ባረካቸው' },
                { timestamp: 105, text: 'ለእናት ለአባት ታዛዥ ግሩም ልጅ ሠጣቸው/2/ ለጌታ መሥዋእት እኔ ልቅረብ ያለው' },
                { timestamp: 130, text: 'ይስሐቅን ለአብርሃም የሠጠው/2/ በመልካም ጋብቻ በጥሩ ትዳር ነው/2/' },
                { timestamp: 155, text: 'ቅዱስ አባታችን ፈጣሪያችን ሆይ ጌታችን አምላካችን ሆይ(2)' },
                { timestamp: 180, text: 'በአብርሃም ጎጆ እንደገባህበት በሙሽሮቹም ቤት በረከት ሙላበት/2/' },
                { timestamp: 205, text: 'በቃናዋ መንደር የጠራኽ ሠርገኛ/2/ አምላክ ተገኘልህ ሆነህ እድላኛ /2/' },
                { timestamp: 230, text: 'በቃናዋ መንደር የጠራሽ ሠርገኛ/2 ድንግል ጎበኘችሽ ሆነሽ እድለኛ/2/' }
              ],
            },
            {
              id: 140,
              title: 'ይትባረክ እንደ አብርሃም',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mushra.jpg'),
              audio_url: require('../assets/music/Yitbarek_endabrham_edited.opus'),
              duration: 260,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ይትባረክ እንደ አብርሃም/2/ እኸ ዘለዓለም/4/ ይትባረክ እንደ አብርሃም/2/' },
                { timestamp: 30, text: 'ሙሽሪት ሙሽራው እንደአብርሃም እንኳን ደስ አላችሁ ተከበረ ዛሬ ቅዱስ ጋብቻችሁ' },
                { timestamp: 60, text: 'በተክሊል በቁርባን እንደአብርሃም ስለተጋባችሁ እጅጉን ደስ አለው ቅዱስ አባታችሁ' },
                { timestamp: 90, text: 'በሥርዓተ ተክሊል እንደአብርሃም ከተጣመራችሁ ደስታ ሰላም ይሙላ ይመር ትዳራችሁ' },
                { timestamp: 120, text: 'እልል በሉላቸው እንደ አብርሃም ዛሬ ነው ሠርጋቸው የተመረጡበት መልካም ጋብቻቸው' },
                { timestamp: 150, text: 'አንቺም እንደ ሣራ እንደ አብርሃም እርሱም እንደ አብርሃም ተፋቅራችሁ ኑሩ እስከ ዘላዓለም' },
                { timestamp: 180, text: 'በሉ ደህና ግቡ እንደ አብርሃም ወደ አዲስ ጐጆአችሁ አምላክ በጥበቡ ፍቅርን ያላብሣችሁ' }
              ],
            },
            {
              id: 141,
              title: 'ሶበ ሰማእነ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mushra.jpg'),
              audio_url: require('../assets/music/Sobe_Semayne_Zena.opus'),
              duration: 180,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ሶበ ሰማእነ ዜናከ መጻእነ ኀቤከ/2/ መጻእነ/4/' },
                { timestamp: 20, text: 'እንደ ሰብአ ሰገል ነገሥተ ምሥራቅ ዝናህን ለመስማት መጣን ልንጠየቅ' },
                { timestamp: 40, text: 'እንደ ሰብአ ሰገል ነገሥተ ምሥራቅ ዝናሽን ለመስማት መጣን ልንጣይቅሽ' },
                { timestamp: 60, text: 'ብቻህን ስላየህ ቢወድህ ፈጣሪ ፈጠረልህ ለአንተ አጽናኝ አማካሪ' },
                { timestamp: 80, text: 'የወንጌልን ትእዛዝ በመፈጸምህ ለዚህ ክብር በቃህ በድንግልናህ' },
                { timestamp: 100, text: 'የወንጌልን ትእዛዝ በመፈጸምሽ ለዚህ ክብር በቃሽ በድንግልናሽ' },
                { timestamp: 120, text: 'አንቺ ቤተልሔም ቤተክርስቲያን ሁለቱን አዋሐድሽ በቅዱስ ቁርባን' }
              ],
            },
            {
              id: 142,
              title: 'ትብሎ መርዓት',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mushra.jpg'),
              audio_url: require('../assets/music/Ehe_Tebelo_Merat.opus'),
              duration: 110,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ኸኸ ትብሎ መርዓት ኸኸ ለመርዓዊሀ(2) ኸኸ ሰናየ አንተ አንተ ወልድ እኁየ(2)' },
                { timestamp: 15, text: 'ትርጉም፡ ኸኸ ሙሽሪት አለች ኸኸ ለሙሽራው(2) ኸኸ ሕይወቴ ነህ አንተ ሕይወቴ ነህ(2) ኸኸ ሙሽራው አለ ኸኸ ለሙሽሪት(2) ኸኸ ሕይወቴ ነሽ አንቺ ሕይወቴ ነሽ' }
              ],
            },
            {
              id: 143,
              title: 'ደስ አላቸው (በዝማሬ)( አመላለስ)',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mushra.jpg'),
              audio_url: require('../assets/music/Desalachew_Longu.opus'),
              duration: 200,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ደስ አላቸው ሙሸራው ሙሽሪት በዝማሬ ሙሸራው ሙሽሪት ደምቆ ታይቷል ሙሸራው ሙሽሪት ጋብቻቸው ሙሸራው ሙሽሪት' },
                { timestamp: 30, text: 'እግዚአብሔር ይመስገን ሙሽራው ሙሽሪት ኃያሉ ጌታችን ሙሽራው ሙሽሪት ለዚህ ላበቃቸው ሙሸራው ሙሽሪት' },
                { timestamp: 60, text: 'ወንድም እህታችንን ሙሽራው ሙሽሪት ጋብቻ ቅዱስ ነው ሙሽራው ሙሽሪት ብሏል አምላካችን ሙሸራው ሙሽሪት እንደዚህ ሲፈጸም በቤተክርስቲያን' },
                { timestamp: 90, text: 'መኖር የለበትም ሙሸራው ሙሽሪት አዳም ብቻውን ሙሽራው ሙሽሪት ብሎ ፈጠረለት ሙሽራው ሙሽሪት ከጐኑ ሔዋንን ሙሽራው ሙሽሪት' },
                { timestamp: 120, text: 'ዛሬም እንደ ቀድሞው ሙሽራው ሙሽሪት እንደ መጽሐፉ ሙሽራው ሙሽሪት ተመርጦ ተሰጠው ለአዳም ሙሽራው' },
                { timestamp: 150, text: 'ሔዋን ጐኑ ሆና ሙሽራው ሙሽሪት አዳም ሆይ ስትለው ሙሽራው ሙሽሪት በረዳትነቷ ሙሽራው ሙሽሪት አዳም ደስ ደስ አለው ሙሽራው ሙሽሪት' },
                { timestamp: 180, text: 'በአምላክ መልካም ፈቃድ ሙሽራው ሙሽሪት በፍቅር ተሳስረረው ሙሽራው ሙሽሪት አንድ አካል ሆነዋል ማንም አይለያቸው' }
              ],
            },
            {
              id: 144,
              title: 'ደስ አላቸው (የልባቸው ምክር)',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mushra.jpg'),
              // audio_url: 'TODO: add local file for song id 144',
              duration: 220,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ደስ አላቸው የልባቸው ምክር የብቻቸው ምስጢር ዛሬ ተፈፅሟል በቤተክርስቲያን' },
                { timestamp: 25, text: 'እርሱ በፈቀደው አገናኝቷቸዋል ደስ አላቸው ቅዳሴው ሲቀደስ' },
                { timestamp: 50, text: 'ዝማሬው ሲዘመር ሲባረኩ በአምላክ ለዚህ ክብር በቅተው' },
                { timestamp: 75, text: 'ተክሊል ሲቀዳጁ ቁርባን ተቀብለው ደስ አላቸው ከዝሙት ጠብቆ' },
                { timestamp: 100, text: 'ከዓለም ፈተና ወደ ቤቱ ጠርቶ ለቅዱስ ጋብቻ ስለመረጣቸው' },
                { timestamp: 125, text: 'የወንጌልንም ቃል በመፈጸማቸው' }
              ],
            },
            {
              id: 145,
              title: 'ይህን ላደረገ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mushra.jpg'),
              audio_url: require('../assets/music/Lezih_Ladersen.opus'),
              duration: 300,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ይህን ላደረገ ሃሌሉያ በሉ እግዚአብሔር ታማኝ ነው ሁል ጊዜ ለቃሉ' },
                { timestamp: 20, text: 'ሙሽሪት ሙሽራው እንኳን ደስ አላችሁ የያእቆብ አምላክ ሞገስ ሆነላችሁ(2)' },
                { timestamp: 40, text: 'ስንቱን ተራራ አልፈነዋል በሰገነት ላይ አቁሞናል እስኪ እንዘምር በደስታ ሁሌ ታማኝ ነው የእኛ ጌታ' },
                { timestamp: 70, text: 'ከእኛ የሆነው ምንም የለም ተመስገን ጌታ ለዘላለም ስራህ አበራ በምስጋና በሙሽሮች ላይ እንደገና' },
                { timestamp: 100, text: 'የማይሆን መስሎ የታየን በእግዚአብሔር ሆኖ ስላየን እንደ አሳፍ ልጆች ተሰልፈን ስሙን በቅኔ ለማስገን' },
                { timestamp: 130, text: 'የተባረከ በመዳፉ ቅኔን ያፈሳል ሁሌ በአፉ ከመላእክት ጋር አንድ ሆነናል የእግዚአብሔር ስራዉ መስጦናል' },
                { timestamp: 160, text: 'ጋኑ ቢጎድል የወይን ጠጁ ያስባል ጌታ ለወዳጁ መናኛው ይውጣ ከቤታችን አዲስ እንጠጣ ጌታን ይዘን' },
                { timestamp: 190, text: 'አቤኔዘር ነው መዝሙራችን እየረዳን ነው አምላካችን ፊታችን በራ በምስጋና ከሙሽሮች ጋር እንደገና' }
              ],
            },
            {
              id: 146,
              title: 'አሐዱ አካል',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mushra.jpg'),
              audio_url: require('../assets/music/Ahadu_Akal.opus'),
              duration: 100,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'አሐዱ አካል/2/ ዘአስተጻመረ/3/ እግዚአብሔር' }
              ],
            },
            {
              id: 147,
              title: 'የማኑ ተሀቅፈኒ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mushra.jpg'),
              audio_url: require('../assets/music/Yemanu_Tehakfeni.opus'),
              duration: 110,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'የማኑ ተሀቅፈኒ ወፀጋሙ ታሕተርእስየ(2) ትብሎ መርዓት ትብሎ/4/መርዓዊሃ' }
              ],
            }
          ]
        },
        {
          id: 'geez_1',
          name: 'ግእዝ 1',
          image: require('../assets/images/mushra.jpg'), 
          songs: [
            {
              id: 148,
              title: 'አጅቡት በእልልታ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mushra.jpg'),
              audio_url: require('../assets/music/Ajibut_Belilta.opus'),
              duration: 250,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'አጅቡት በአእልልታ ሲመጣ ሙሽራው ፍጹም የሚያስደስት የሠርጉ እለት ነው' },
                { timestamp: 20, text: 'ዘመዶቹ ሁሉ ተቀበሉት ውጡ የሙሽራው መምጫ አሁን ነው ሰዓቱ' },
                { timestamp: 40, text: 'እልል /2/እንበል እንዘምር በእልልታ ይህን ላደረገ ለሠራዊት ጌታ' },
                { timestamp: 60, text: 'ሁሉንም በጊዜው ይፈጽማልና ይኸው አበቃቸው ለዚህ መልካም ዜና(2)' },
                { timestamp: 80, text: 'ሙሽሪት ተደሰች ዝምታው ምንድ ነው የዳግም ልደትሽ የሠርግሽ እለት ነው' },
                { timestamp: 100, text: 'አዳም ጐንሽ ሆኖ ሔዋን ሆይ ሲልሽ መንፈሳዊ ሐሴት ይሙላ በልብሽ' },
                { timestamp: 120, text: 'እህት ወንድሞቿ እናትና አባቷ ተነሡ ዘምሩ ለልጃችሁ ደስታ' },
                { timestamp: 140, text: 'መሄዷ ነውና ወደቤቷ ዛሬ ወደ አዲስ ጐጆዋ ሽኙአት በዝማሬ' },
                { timestamp: 160, text: 'ቤተሰቦችሽን ሁሉንም ትተሽ መሄድሽ ነውና ወደ መኖሪያሽ' },
                { timestamp: 180, text: 'ከአማኑኤል ጋራ ባልሽን ይዘሽ ተነሽ ሙሽራዬ ደርሰዋል ሰዓትሽ' },
                { timestamp: 200, text: 'ከድንግልም ጋራ ሚስትህን ይዘህ ተነሥ ወንድሜ ሆይ ደርስዋል ሰዓትህ' }
              ],
            },
            {
              id: 149,
              title: 'የምሥራች ደስ ይበላችሁ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mushra.jpg'),
              // audio_url: require('../assets/music/Yemsrach_Des_Yibelen.opus'),
              duration: 220,
              genre: 'ግእዝ 1',
              lyrics: [
                { timestamp: 0, text: 'የምሥራች ደስ ይበላችሁ/2/ አሸብርቆ ዋለ ሙሽሮች ሠርጋችሁ/2/' },
                { timestamp: 25, text: 'ሕይወታችሁ ሰላማዊ ፍጹም ፍቅር/2/ እንደ ጽጌረዳ እንደ አደይ ፈክቶ የሚኖር' },
                { timestamp: 50, text: 'አማኑኤል ያድርገው መልካም ትሥሥር መተሳሰብ መከባበር ይሁን ተግብራችሁ/2/' },
                { timestamp: 75, text: 'ሠርጐ እንዳይገባ ዲያብሎስ በትዳራችሁ በጸሎት ይታጠር ሙሽሮች ጐጆአችሁ' },
                { timestamp: 100, text: 'ዓይኖቻችሁ የጐረቤት አይመልከቱ/2/ ለወሬ ለሐሜት ጆሮአችሁ አይከፈቱ' },
                { timestamp: 125, text: 'በችግር በደስታ በጾም ጸሎት በርቱ እግሮቻችሁ ይገስግሱ ወደ እውነት/2/' },
                { timestamp: 150, text: 'አማናዊ ማእድ ክርስቶስ ወዳለበት በልባችሁ አኑሩት ታላቁን አባት' },
                { timestamp: 175, text: 'ድንግል ማርያም ቅድስት እናት ለምኚላቸው/2/ የሚፈልጉትን በሙሉ አንቺ አስጪያቸው' },
                { timestamp: 200, text: 'በሰማይ በምድርም ምልጃሽ አይራቃቸው' }
              ],
            },
            {
              id: 150,
              title: 'በቃና ዘገሊላ ቁ.1',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mushra.jpg'),
              audio_url: require('../assets/music/Bekanazegelila_Achru.opus'),
              duration: 100,
              genre: 'ግእዝ 1',
              lyrics: [
                { timestamp: 0, text: 'በቃና ዘገሊላ/2/ ዘገሊላ ከብካብ ኮነ/2/' }
              ],
            },
            {
              id: 151,
              title: 'እዝራኒ ተናገራ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mushra.jpg'),
              audio_url: require('../assets/music/Ezrani_Tenagera.opus'),
              duration: 110,
              genre: 'ግእዝ 1',
              lyrics: [
                { timestamp: 0, text: 'እዝራኒ ተናገራ/2/ ተናገራ ዳዊት ዘመራ ተናገራ ዘመራ ዳዊት(2)' }
              ],
            },
            {
              id: 152,
              title: 'ይቤላ እኅትየ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mushra.jpg'),
              audio_url: require('../assets/music/Yibela_Ehteye.opus'),
              duration: 120,
              genre: 'ግእዝ 1',
              lyrics: [
                { timestamp: 0, text: 'ይቤላ እኅትየ/2/ እኅትየ (የሙሽሪት ስም) አፅምየ እምአፅምኪ ይኩን(2)' },
                { timestamp: 15, text: 'ትርጉም፡ ይላታል እህቴ ሆይ(2) እህቴ ሆይ (የሙሽሪት ስም) አጥንትሽ ከአጥንቴ ይሁን(2)' }
              ],
            },
            {
              id: 153,
              title: 'ሥላሴ ይባርኳችሁ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mushra.jpg'),
              audio_url: require('../assets/music/Selase_yibarkwachu_edited.opus'),
              duration: 260,
              genre: 'ግእዝ 1',
              lyrics: [
                { timestamp: 0, text: 'ሥላሴ ይባርኳችሁ /4/ በሥጋ ወደሙ ዛሬ የከበራችሁ ሥላሴ ይባርኳችሁ/2/' },
                { timestamp: 25, text: 'እመ አምላክ ትከተልህ(ሽ)/4/ ፈተና እንዳይገጥምህ(ሽ) ድንግል ትከተልህ(ሽ) እመ አምላክ ትከተልህ(ሽ)(2)' },
                { timestamp: 50, text: 'ሚካኤል በኑሯችሁ/4/ አርምሞ ማስተዋል ትዕግስቱን ይስጣችሁ ሚካኤል በኑሯችሁ(2)' },
                { timestamp: 75, text: 'ገብርኤል ከላይ ወርዶ/4/ እርሱ ይራዳችሁ በክንፎቹ ጋርዶ ገብርኤል ከላይ ወርዶ(2)' },
                { timestamp: 100, text: 'ዑራኤል በምልጃው/4/ የእውቀትን ጥበብ ይስጥህ/ሽ/ በጽዋው ዑራኤል በምልጃው(2)' },
                { timestamp: 125, text: 'ጊዮርጊስ አይለያችሁ/4/ በፈተና ጊዜ ጽናቱን ይስጣቹ ጊዮርጊስ አይለያችሁ(2)' },
                { timestamp: 150, text: 'ተክለ ሃይማኖት በጸሎት/4/ ያግዟችሁ ዘውትር ሆነው እረዳት ተክለ ሃይማኖት በጸሎት(2)' }
              ],
            },
            {
              id: 154,
              title: 'ደስ ይበለን (አምላክ አለ መሐላችን)',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mushra.jpg'),
              audio_url: require('../assets/music/Des_yibelen_amlak_ale_edited.opus'),
              duration: 180,
              genre: 'ግእዝ 1',
              lyrics: [
                { timestamp: 0, text: 'ደስ ይበለን ደስ ይበለን አምላክ አለ መሐላችን ምን ይከፈል ለዚህ ሥራህ ገናና ነው አምላክ ክብርህ(2)' },
                { timestamp: 30, text: 'እልልታ ነው በሰማያት በሙሽሮች ብሩህ መብራት በእግዚአብሔር ፊት ተንበርክካችሁ የክብር አክሊል ስለሰጣችሁ' },
                { timestamp: 60, text: 'የፍቅር ሕይወት ይሁንላችሁ ምሣሌ ነው ዛሬ ሠርጋችሁ የዓለም ደስታ ሳይማርካችሁ በእግዚአብሔር ቤት ሆነ ሠርጋችሁ' },
                { timestamp: 90, text: 'ለዚህች እለት አደረሳችሁ በአምላክ እቅፍ ሆነ ነፍሳችሁ የዘለዓለም ሙሽሮች ናችሁ ለመዳን ቀን የተጠራችሁ' }
              ],
            },
            {
              id: 155,
              title: 'ከመጽጌ ሮማን',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mushra.jpg'),
              audio_url: require('../assets/music/Keme_tsege_roman_musheraye_yeserg_edited.opus'),
              duration: 100,
              genre: 'ግእዝ 1',
              lyrics: [
                { timestamp: 0, text: 'ከመጽጌ ሮማን ከመጽጌ/2/ ሙሸራዬ/2/------(የሙሽሪት ስም)ሲሳዬ/2/' }
              ],
            },
            {
              id: 156,
              title: 'በክብር ዙፋኑ (Wedding Version)',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mushra.jpg'),
              audio_url: require('../assets/music/Bekibir_Zufanu.opus'),
              duration: 200,
              genre: 'ግእዝ 1',
              lyrics: [
                { timestamp: 0, text: 'በክብር ዙፋኑ መርጦ ያስቀመጠሽ ለእኛ ለኃጢአተኞች ተስፋችን አንቺነሽ' },
                { timestamp: 20, text: 'በፍጹም ንጽሕና ቤተ መቅደስ ያደግሽ የአማኑኤል የጌታዬ የፈጣሪ እናት በምን እንመስልሽ/2/' },
                { timestamp: 40, text: 'ቃና ዘገሊላ ሠርግ ደግሰው አንቺን ከነልጅሽ በክብር ጠርተው' },
                { timestamp: 60, text: 'ሰዎች ተረብሸው በጣም ተደናግጠው ወይኑ በማለቁ በፍርሃት ተውጠው' },
                { timestamp: 80, text: 'ወይኑ በመሃል ላይ ማለቁን ሰምተሽ ድንጋጤአቸውን እመበቴ አይተሽ' }
              ],
            }
          ]
        },
        {
          id: 'geez_2',
          name: 'ግእዝ 2',
          image: require('../assets/images/mushra.jpg'), 
          songs: [
            {
              id: 157,
              title: 'ያስደስታል',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mushra.jpg'),
              // audio_url: 'TODO: add local file for song id 157',
              duration: 130,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'ያስደስታል/3/ የእኛ እምነታችን የኦርቶዶክስ ተዋሕዶ የጋብቻ ሥርዓታችን/2/' },
                { timestamp: 15, text: 'ተፈጸመ/3/ ዛሬ ሠርጋችሁ ምስጋና ይግባው እንላለን /2/ ቸሩ አምላካችን' }
              ],
            },
            {
              id: 158,
              title: 'በቃና ዘገሊላ ቁ.2',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mushra.jpg'),
              audio_url: require('../assets/music/Bekana_Zegelila_2.opus'),
              duration: 110,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'በቃና ዘገሊላ ማየ ወይነ ረሰየ /2/ መዓዛ ቃልከ ይትወከፍ ጸሎትየ/2/' }
              ],
            },
            {
              id: 159,
              title: 'የቃናው ደስታ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mushra.jpg'),
              // audio_url: 'TODO: add local file for song id 159',
              duration: 240,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'የቃናው ደስታ ዛሬ ተደገመ ጌታ ከእናቱ ጋር በሠርጉ ታዳመ' },
                { timestamp: 20, text: 'የዘላላም አምላክ ስላለ በዚህ ቤት ሙሽራው መሽሪት አገኙ በረከት(2)' },
                { timestamp: 40, text: 'መርዓት ተሸልማ የድንግልና አክሊል እዩት ሥርዓቱን እጅግ ያስደስታል' },
                { timestamp: 60, text: 'አንድ አካል ሙሽሮች እዩአቸው ሲያበሩ በወንጌሉ በተክሊሉ ሄዱ እየተመሩ' },
                { timestamp: 80, text: 'እንግዳቸው ብዙ ድንኳናቸው ሙሉ ጌታ ከእናቱ ጋር አለ በመሐሉ' },
                { timestamp: 100, text: 'የወይን ጋኖቹ ዛሬ ሙሉ ናቸው አማኑኤል ድንግል ማርያም ስላሉ ቤታቸው' },
                { timestamp: 120, text: 'በክብር ታጅቦ ሲመጣ መርዓዊ እጅግ ያስደስታል አይደለም ምድራዊ' },
                { timestamp: 140, text: 'ዛሬም በዚህ ድንኳን ደስታ ተደረገ በአማኑኤል በአምለካችን ስለተባረከ' },
                { timestamp: 160, text: 'በተክሊል በቁርባን የሆነው አንድነት አይነጣጠልም ዳግም ወደሁለት' },
                { timestamp: 180, text: 'ሙሽሪት ሙሽራው ተደሰቱ ዛሬ በሠርጋቹ ተገለጠ የእምነታችሁ ፍሬ' }
              ],
            },
            {
              id: 160,
              title: 'ትዌድሶ መርዓት',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mushra.jpg'),
              audio_url: require('../assets/music/Tiwedso_Merat.opus'),
              duration: 120,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'ትዌድሶ መርዓት ወትብሎ/2/ ወልድ እኁየ ቃልከ አዳም/4/' },
                { timestamp: 15, text: 'ትርጉም፡ ታወድሰው ሙሽራውን እንዲህ ብላ(2) ወንድሜ (የሙሽራው ስም)ቃልህ ያምራል ብላ(2) ያወድሳት ሙሽሪትን እንዲህ ብሎ(2) እህቴ (የሙሽሪት ስም)ቃልሽ ያምራል ብሎ(2)' }
              ],
            },
            {
              id: 161,
              title: 'በምድራዊ ሕይወት',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mushra.jpg'),
              audio_url: require('../assets/music/Bemidrawi_Hiwot_Yeserg.opus'),
              duration: 110,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'በምድራዊ ሕይወት/2/በፈተና ቦታ/2/' },
                { timestamp: 15, text: 'ድንግል ትጠብቅህ(ሽ) እጆቿን ዘርግታ(2)' }
              ],
            },
            {
              id: 162,
              title: 'ካህናት ተንስኡ (Part 2)',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mushra.jpg'),
              audio_url: require('../assets/music/Kahnat_Tensu.opus'),
              duration: 100,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'ካህናት ተንስኡ ተንስኡ ለተናብቦ(2)' },
                { timestamp: 15, text: 'እንዘ ይብሉ ንሴብሖ (2)' }
              ],
            }
          ]
        },
        {
          id: 'geez_3',
          name: 'ግእዝ 3',
          image: require('../assets/images/mushra.jpg'), 
          songs: [
              {
                id: 163,
                title: 'ዳዊት ይሴብሕ',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/mushra.jpg'),
                audio_url: require('../assets/music/Dawit_Yisebh.opus'),
                duration: 100,
                genre: 'ግእዝ 3',
                lyrics: [
                  { timestamp: 0, text: 'ዳዊት ይሴብሕ ወይዜምር እዝራ/2/' },
                  { timestamp: 15, text: 'እንዘ ይብሉ ሙሽሪት ሙሽራ/2/' }
                ],
              }
          ]
        },
      ]
    },




    // ═══════════════════════════════════════════════════════
    // CATEGORY 1
    // ═══════════════════════════════════════════════════════
    {
      id: 'yewede_amet',
      name: 'የዓወደ ዓመት መዝሙራት',
      icon: require('../icons/playlist.png'),
      color: '#FF6B6B',
      image: require('../assets/images/awdeamet.jpg'), 
      subcategories: [

        {
          id: 'yewede_amet_ezil_araray',
          name: 'እዝል ዓራራይ ቅኝት',
          image: require('../assets/images/awdeamet.jpg'), 
          songs: [
            {
    id: 164,
    title: 'ሃሌ ሉያ',
    artist: 'Zefinote Selam Sunday School',
    cover_url: require('../assets/images/awdeamet.jpg'),
    // audio_url: 'TODO: add local file for song id 164',
    duration: 233,
    genre: 'እዝል ዓራራይ ቅኝት',
    lyrics: [
      { timestamp: 0, text: 'ዋይ ዜማ ዘሰማዕኩ በሰማይ እመላእክት' },
      { timestamp: 5, text: 'ቅዱሳን እንዘ ይብሉ ቅዱስ /3/' },
      { timestamp: 10, text: 'እግዘብሔር መልዓ ሰማያተ' },
      { timestamp: 15, text: 'ወምድረ ቅድሳተ ስብሐቲከ' }
    ],
  },
  {
    id: 165,
    title: 'ጸሊ ኀበ አምላክ',
    artist: 'Zefinote Selam Sunday School',
    cover_url: require('../assets/images/awdeamet.jpg'),
    audio_url: require('../assets/music/Tseli.opus'),
    duration: 203,
    genre: 'እዝል ዓራራይ ቅኝት',
    lyrics: [
      { timestamp: 0, text: 'ጸሊ ኀበ አምላክ ራጉኤል መልአክ /፪/' },
      { timestamp: 5, text: 'ዓውደ ዓመት ከመ ይትባረክ /፬/' },
      { timestamp: 10, text: 'ትርጉም፦ ዓውደ ዓመቱ ይባረክ ዘንድ ራጉኤል' },
      { timestamp: 15, text: 'መልአክ ወደ አምላክ ጸልይ /ለምን' }
    ],
  },
  {
    id: 166,
    title: 'ባርክ ለነ',
    artist: 'Zefinote Selam Sunday School',
    cover_url: require('../assets/images/awdeamet.jpg'),
    audio_url: require('../assets/music/Barek_Lene.opus'),
    duration: 240,
    genre: 'እዝል ዓራራይ ቅኝት',
    lyrics: [
      { timestamp: 0, text: 'ባርክ ለነ እግዚኦ ዘንተ ዓመተ ምሕረትነ' },
      { timestamp: 5, text: 'በብዝኅ ሒሩትከ ለሕዝብከ ኢትዮጵያ' },
      { timestamp: 10, text: 'ከመንግነይ ለስምከ ቅዱስ/፪/' },
      { timestamp: 15, text: 'ወከመ ይኩን ንብረተነ በሰላም' },
      { timestamp: 20, text: 'ወበዳኅና ለዝንቱ ዓመት/፪/' },
      { timestamp: 25, text: 'ባርክልን አቤቱ ይህንን የምሕረት' },
      { timestamp: 30, text: 'ዓመታችንን በቸርነትህ ብዛት ለሕዝቦችህ' },
      { timestamp: 35, text: 'ኢትዮጵያ እንድንገዛ ለቅዱስ ስምህ /፪/' },
      { timestamp: 40, text: 'እንዲሆንም ኑሮአችን የሰላም በደኅና በዚህ ዓመት /፪/' }
    ],
  },
  {
    id: 167,
    title: 'ዓውደ ዓመት',
    artist: 'Zefinote Selam Sunday School',
    cover_url: require('../assets/images/awdeamet.jpg'),
    audio_url: require('../assets/music/Awdeamet_Lebarko.opus'),
    duration: 180,
    genre: 'እዝል ዓራራይ ቅኝት',
    lyrics: [
      { timestamp: 0, text: 'ዓውደ ዓመት ለባርኮ ባርኮ ዓውደ ዓመት /፪/' },
      { timestamp: 5, text: 'ንዒ ማርያም ለምሕረት ወሣህል /፪/' },
      { timestamp: 10, text: 'ትርጉም ዓውደ ዓመቱ ይባረክ ዘንድ ማርያም ሆይ ልምሕርት እና ይቅርታ ነይ' }
    ],
  },
  {
    id: 168,
    title: 'መስከረም ጠባ',
    artist: 'Zefinote Selam Sunday School',
    cover_url: require('../assets/images/awdeamet.jpg'),
    audio_url: require('../assets/music/Meskeren_Teba.opus'),
    duration: 310,
    genre: 'እዝል ዓራራይ ቅኝት',
    lyrics: [
      { timestamp: 0, text: 'መስከረም ጠባ ኢዮሃ አበባ/፪/' },
      { timestamp: 5, text: 'መስከረም ጠባ ኢዮሃ አበባ' },
      { timestamp: 10, text: 'ኢዮ መስከረም ጠባ ለእኛ ኢዮሃ አበባ' },
      { timestamp: 15, text: 'መስቀል አበራ ኢዮሃ አበባየ' },
      { timestamp: 20, text: 'ለእኛ እንዲሆነን ዕድገትና ልማት' },
      { timestamp: 25, text: 'ኢዮ ኢዮሃ አበባየ ኢዮ' },
      { timestamp: 30, text: 'መስከረም ጠባ ለኛ ኢዮሃ አበባ' },
      { timestamp: 35, text: 'በተዋሕዶ የከበረች እናታችንን' },
      { timestamp: 40, text: 'የጥበብ ልጆችዋ እናከብራታለን' },
      { timestamp: 45, text: 'ሃይማኖት ከምግባር ወንጌል መግባ' },
      { timestamp: 50, text: 'ስላሳደገቸን የድኅነት መሠረት ቤተክርስቲያን እናታችን' },
      { timestamp: 55, text: 'ጥንትም መሪና አስተማሪ በመሆንዋ' },
      { timestamp: 60, text: 'በዓለም ላይ ታውቋል ዜናዋ' },
      { timestamp: 65, text: 'እየተወሳ በዓለም ዜና ያኰራናል' },
      { timestamp: 70, text: 'መስቀላችን ኢዮሃ አበባ' },
      { timestamp: 75, text: 'መስከረም ጠባ ኢዮሃ አበባየ' },
      { timestamp: 80, text: 'ኢዮሃ አበባ /፫/' }
    ],
  },
  {
    id: 169,
    title: 'ራጉኤልኒ ይቤ',
    artist: 'Zefinote Selam Sunday School',
    cover_url: require('../assets/images/awdeamet.jpg'),
    audio_url: require('../assets/music/Timketke.opus'),
    duration: 195,
    genre: 'እዝል ዓራራይ ቅኝት',
    lyrics: [
      { timestamp: 0, text: 'ራጉኤልኒ ይቤ በውስተ ኦሪት ምድር ሠናይት ደብረ ኃይል /፪/' },
      { timestamp: 5, text: 'እንተ ዘልፈ ይሔውጻ እግዚአብሔር ለኢትዮጵያ እም ዓመት' },
      { timestamp: 10, text: 'እስከ ርዕሰ ዓውደ ዓመት /፪/' },
      { timestamp: 15, text: 'ራጉኤል በሕግ ውስጥ ደብረ ኃይልን ያማረች የተዋበች ምድር ይላል' },
      { timestamp: 20, text: 'እግዚአብሔር ከዓመት እስከ ርዕሰ ዓውደ ዓመት ይጎበኛታልና' }
    ],
  },
  {
    id: 170,
    title: 'በምድረ ጽዮን',
    artist: 'Zefinote Selam Sunday School',
    cover_url: require('../assets/images/awdeamet.jpg'),
    audio_url: require('../assets/music/Bemidrawi_Hiwot.opus'),
    duration: 215,
    genre: 'እዝል ዓራራይ ቅኝት',
    lyrics: [
      { timestamp: 0, text: 'በምድረ ጽዮን ዕይኩን ሐከክ ወበ ገራኀይታ ዒይብቁል ሶክ /፪/' },
      { timestamp: 5, text: 'ጸሊይ ኀበ አምላክ ራጉኤል መልአክ' },
      { timestamp: 10, text: 'ዓውደ ዓመት ከመ ይትባረክ /፪/' },
      { timestamp: 15, text: 'ትር፦ በጽዮን ምድር ድርቅ/ረሀብ እንዳይሆን' },
      { timestamp: 20, text: 'በእርሻዎቿም እሾክ እንዳይበቀል ዓውደ ዓመቱም ይባረክ' },
      { timestamp: 25, text: 'ዘንድ መልአኩ ቅዱስ ራጉኤል ወደ አምላክ ወደ እግዚአብሔር ጸልይ' }
    ],
  },
  {
    id: 171,
    title: 'ለባርኮ',
    artist: 'Zefinote Selam Sunday School',
    cover_url: require('../assets/images/awdeamet.jpg'),
    // audio_url: 'TODO: add local file for song id 171',
    duration: 150,
    genre: 'እዝል ዓራራይ ቅኝት',
    lyrics: [
      { timestamp: 0, text: 'ለባርኮ ዓውደ ዓመት ምስለ ራጉኤል መልአክ /፪/' },
      { timestamp: 5, text: 'ንዒ ማርያም /፬/ እመ አምላክ /፪/' },
      { timestamp: 10, text: 'ትርጉም የአምላክ እናት ማርያም ሆይ ከቅዱስ ራጉኤል ጋር አዲሱን ዓመት ለመባረክ ነይ' }
    ],
  },
  {
    id: 172,
    title: 'ንዒ ኀበየ',
    artist: 'Zefinote Selam Sunday School',
    cover_url: require('../assets/images/awdeamet.jpg'),
    // audio_url: 'TODO: add local file for song id 172',
    duration: 220,
    genre: 'እዝል ዓራራይ ቅኝት',
    lyrics: [
      { timestamp: 0, text: 'ንዒ ኀቤየ ኦ ድንግል ምስለ ኤልያስ ወራጉኤል ወበርተሎሚዎስ' },
      { timestamp: 5, text: 'ነቢያተ እሥራኤል /፪/' },
      { timestamp: 10, text: 'ወምስለ ዮሐንስ ድንግል /፪/ ለባርኮ ዓውደ' },
      { timestamp: 15, text: 'ትርጉም:-ድንግል ሆይ ከኤልያስ ነቢይ ከራጉኤል መልአክ ከበርተሎሚዎስ' },
      { timestamp: 20, text: 'ከእስራኤል ነቢያት እንዲሁም ከቅዱስ ዮሐንስ ጋር አዲሱን ዓመት ለመባረክ ነይ' }
    ],}
            // ↓ you can add song suggession by elias
          ],
        },

        {
          id: 'yewede_amet_geez_1',
          name: 'ግዕዝ 1',
          image: require('../assets/images/awdeamet.jpg'), 
          songs: [
            {
              id: 173,
              title: 'እሰይ ደስ ደስ ይበላችሁ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/awdeamet.jpg'),
              // audio_url: 'TODO: add local file for song id 173',
              duration: 285,
              genre: 'ግዕዝ 1',
              lyrics: [
              { timestamp: 0, text: 'እሰይ ደስ ይስ ይበላችሁ /፪/' },
              { timestamp: 5, text: 'ቅዱስ ዮሐንስ መጣላችሁ' },
              { timestamp: 10, text: 'ደስ ብሎን መጣን ደስ ብሎን /፪/ ሥላሴ አሉ ብለን ደስ ብሎን መጣን ደስ ብሎን ጌቶች አሉ ብለን' },
              { timestamp: 15, text: 'ደስ ብሎን መጣን ደስ ብሎን እሜቴ አሉ ብለን ደስ ብሎን መጣን ደስ ብሎን' },
              { timestamp: 20, text: 'አዝ=====' },
              { timestamp: 25, text: 'አበባዩሽ ቅድስት አበባዩሽ ቅድስት' },
              { timestamp: 30, text: 'እንቆቅልሹን ንግሥት ልትፈትን ሄዳ ንግሥት' },
              { timestamp: 35, text: 'ንግሥት አዜብ ንግሥት እናት ማክዳ ንግሥት' },
              { timestamp: 40, text: 'በልቧ ያለውን ንግሥት አጫወታቸው ንግሥት' },
              { timestamp: 45, text: 'አስቀምጣ አበባ ንግሥት እያሳየችው ንግሥት' },
              { timestamp: 50, text: 'መአዛው የሚሸት ከሁለቱ የቱ ነው አለችው ከሁለቱ' },
              { timestamp: 55, text: 'አዝ=====' },
              { timestamp: 60, text: 'ንግሥት ሆይ ለጥያቄሽ ጥበብ አለሽ /፪/' },
              { timestamp: 65, text: 'የአገር አምባር የሚሆነውን ከልብ ሸተሽ' },
              { timestamp: 70, text: 'አዝ====' },
              { timestamp: 75, text: 'እንቆቅልሹ የሳባ ከበድ የሚለው የሳባ' },
              { timestamp: 80, text: 'ጥበብ ስላለው ንጉሡ ምሥጢሩን ሊያውቀው ንጉሡ' },
              { timestamp: 85, text: 'ክፈት መስኮቱን ሰሎሞን አለው ለሎሌው ሰሎሞን' },
              { timestamp: 90, text: 'ገቡ ንቦቹ ሊቀስሙ ከአበባው አርፈው ከቤቱ' },
              { timestamp: 95, text: 'ብልህ ጠቢቡ መለሠ ለተጠየቀው በእውነት' },
              { timestamp: 100, text: 'ንጉሥ ሰሎሞን ምስጢሩ አልተሰወረም በእውነት' },
              { timestamp: 105, text: 'አዝ=====' },
              { timestamp: 110, text: 'አደይ ቅድስት ሀገሬ እልል በይ /፪/' },
              { timestamp: 115, text: 'ኢትዮጵያ የዝናሽ ግርማ በዓለም ተሰማ / ፪/' },
              { timestamp: 120, text: 'አዝ=====' },
              { timestamp: 125, text: 'ለፈጣሪዋ ንግሥት ምስጋና አቅርባ ንግሥት' },
              { timestamp: 130, text: 'ኢትዮጵያዊቷ ንግሥት ንግሥተ ሣባ ንግሥት' },
              { timestamp: 135, text: 'ጥበቡን አይታ ንግሥት አደነቀችው ንግሥት' },
              { timestamp: 140, text: 'የወርቅን ሽቶ ንግሥት እንቁ ሰጠችው ንግሥት' },
              { timestamp: 145, text: 'አዝ====' },
              { timestamp: 150, text: 'ንግሥት ሆይ ምስክር ሆንሽ ለሀገርሽ /፪/' },
              { timestamp: 155, text: 'የአምላክን የፈጣሪያችን ስሙን ጠርተሽ /፪/' },
              { timestamp: 160, text: 'አዝ===' },
              { timestamp: 165, text: 'የኢትዮጵያ ሰዎች ለንግሥት ቆሙ በተራ ለንግሥት' },
              { timestamp: 170, text: 'እደጅ ሆነው ለንግሥት ለዙፋን ክብራ ለንግሥት' },
              { timestamp: 175, text: 'በመስከረም ወር ለንግሥት ሀገር ስትገባ ለንግሥት' },
              { timestamp: 180, text: 'ይዘው ስጦታ ለንግሥት የፈካ አበባ ለንግሥት' },
              { timestamp: 185, text: 'አዝ======' },
              { timestamp: 190, text: 'አደይ የብርሃን ጮራ በኢትዮጵያ በራ /፪/' },
              { timestamp: 195, text: 'ኢትዮጵያ በታሪክሽ ጥንታዊት ነሽ /፪/' },
              { timestamp: 200, text: 'አዝ====' },
              { timestamp: 205, text: 'ኢየሩሳሌም ንግሥት ደርሠሽ መጣሽ ንግሥት' },
              { timestamp: 210, text: 'እንኳን በክብር ንግሥት ለዚህ አበቃሽ ንግሥት' },
              { timestamp: 215, text: 'ከአምላክ በረከት ንግሥት ፍሬ አግኝተሽ ንግሥት' },
              { timestamp: 220, text: 'ይዘሽ ስጦታ ንግሥት እንቁ ልጣትሽ ንግሥት' },
              { timestamp: 225, text: 'አዝ====' },
              { timestamp: 230, text: 'ንግሥት ሆይ ለታሪክሽ ክብር አለሽ /፪/' },
              { timestamp: 235, text: 'ልጆችሽ አበባዮሽ እያልን እናስታውስሽ /፪/' },
              { timestamp: 240, text: 'አዝ====' },
              { timestamp: 245, text: 'የአባቶች ተስፋ ለጻድቃን የነቢያት ትንቢት ለጽናት' },
              { timestamp: 250, text: 'የሙሴ ጽላት ለጸሎት የአሮን ክህነት  ለሕይወት' },
              { timestamp: 255, text: 'የዳዊት መንግሥት ለጸጋ ይዘሽ የመጣሽ በፍቅር' },
              { timestamp: 260, text: 'አምስቱን አእማድ ዐቢይ ለሀገር መሰረት በእውነት ዐቢይ' },
              { timestamp: 265, text: 'አዝ====' },
              { timestamp: 270, text: 'አደይ ቅድስት ኢትዮጵያ እልል በይ /፪/' },
              { timestamp: 275, text: 'ኢትዮጵያ በልጆችሽ ደስ ይበልሽ /፪/' },
              { timestamp: 280, text: 'አዝ====' },
              { timestamp: 285, text: 'ሕገ ልቦና ሕጉን ፈጣሪን አውቀሽ ሕጉን' },
              { timestamp: 290, text: 'ሕገ ነቢያትን ከዓለም ቀድመሽ ተቀበልሽ ከዓለም' },
              { timestamp: 295, text: 'በብሉይ ኪዳን ለጌታ መስዋእት አቅርበሽ ለጌታ' },
              { timestamp: 300, text: 'ተሰፋ ካረጉት ከአይሁድ ከእስራኤል ቀድመሽ ከአይሁድ' },
              { timestamp: 305, text: 'ሕገ ወንጌልን በፊት ይዘሽ ተገኘሽ በፊት' },
              { timestamp: 310, text: 'አዝ====' },
              { timestamp: 315, text: 'ኢትዮጵያ ደስ ይበልሽ ትልቅ ጸጋ አለሽ /፪/' },
              { timestamp: 320, text: 'ስለፈጸምሽ ሦስቱን ሕግጋት ለፈጣሪሽ /፪/' },
              { timestamp: 325, text: 'አዝ====' },
              { timestamp: 330, text: 'ካለፈው ስሕተት ሁላችን እንድንመለስ ሁላችን' },
              { timestamp: 335, text: 'አዲሱ ዓመት ለሁሉም መጣ ማቴዎስ ለሁሉም' },
              { timestamp: 340, text: 'ይህም ያልፍና በጊዜው ይመጣል ማርቆስ በጊዜው' },
              { timestamp: 345, text: 'ሌላው ይተካል በጊዜው ዘመነ ሉቃስ በጊዜው' },
              { timestamp: 350, text: 'ወልደ ነጎድጓድ በጊዜው ሲደርስ ዮሐንስ በጊዜው' },
              { timestamp: 355, text: 'በየአራት ዓመት በጊዜው ለሁሉም ሲደርስ በጊዜው' },
              { timestamp: 360, text: 'በየዓመቱ መጥምቁ ቅዱስ ዮሐንስ መጥምቁ' },
              { timestamp: 365, text: 'አዝ====' },
              { timestamp: 370, text: 'አደይ የብርሃን ጮራ በዮሐንስ በራ /፪/' },
              { timestamp: 375, text: 'ኢትዮጵያ ባሕል ቋንቋሽ የሚያኮራሽ /፪/' },
              { timestamp: 380, text: 'አዝ===' },
              { timestamp: 385, text: 'ልጅ አበባ' },
              { timestamp: 390, text: 'ልጅ አበባዬ አዬ ውዲቷ እናቴ' },
              { timestamp: 395, text: 'ልጅ አበባ እያለች እማማ አዬ ቅድስት እናቴ' },
              { timestamp: 400, text: 'እህ ብዬ ድምጥ ሳሰማ  አዬ ቅድስት እናቴ' },
              { timestamp: 405, text: 'እያሻሸች እንድሆን ጤናማ አዬ ቅድስት እማማ' },
              { timestamp: 410, text: 'አዬ ቅድስት እናቴ /፬/' },
              { timestamp: 415, text: 'አዝ====' },
              { timestamp: 420, text: 'አበባ ለምለም ቀጤማ ለምለም' },
              { timestamp: 425, text: 'ኢትዮጵያ እንዳንቺ የለም /፪/' },
              { timestamp: 430, text: 'አብዬ ኸኸ ደሞም እማምዬ' },
              { timestamp: 435, text: 'መጣው ለሰላምታ ከቤት አሉ ብዬ' },
              { timestamp: 440, text: 'እንኩዋን ለቅዱስ ዮሐንስ(የዘመኑ ስም) አደረሶት ብዬ /፪/' },
              { timestamp: 445, text: 'ይሸታል የእጣን ጢስ (2) የቤተመቅደስ ይሸታል ዶሮ ዶሮ(2) ከእማምዬ ጓሮ /፪/' },
              { timestamp: 450, text: 'ይሸታል የወይን ጠጅ /፪/ ከአባብዬ ደጅ /፪/' },
              { timestamp: 455, text: 'አዝ====' },
              { timestamp: 460, text: 'ከብረው ይቆዩ ከብረው' },
              { timestamp: 465, text: 'ዓመት ዓውደ ዓመት ደርሰው' },
              { timestamp: 470, text: 'ቅን ታዛዥ ልጅን ወልደው' },
              { timestamp: 475, text: 'ትሑት ሰው አክባሪ ሆነው ጊታን በእውንት አምነው' },
              { timestamp: 480, text: 'የፍቅር ሸማን ለብሰው' },
              { timestamp: 485, text: 'ንሰሐ ገብተው ቆርበው' },
              { timestamp: 490, text: 'ከብረው ይቆዩ ከብረው(2)' }
  ],
            },
          ],
        },

        // {
        //   id: 'yewede_amet_geez_2',
        //   name: 'ግዕዝ 2',
        //   image: require('../assets/images/awdeamet.jpg'), 
        //   songs: [
        //     {
        //       id: 174,
        //       title: 'Song Title 4',
        //       artist: 'Zefinote Selam Sunday School',
        //       cover_url: require('../assets/images/awdeamet.jpg'),
        //       // audio_url: 'TODO: add local file for song id 174',
        //       duration: 354,
        //       genre: 'ግዕዝ',
        //       lyrics: [],
        //     },
        //   ],
        // },

      ],
    },

    // ═══════════════════════════════════════════════════════
    // CATEGORY 2
    // ═══════════════════════════════════════════════════════
    {
      id: 'st_john',
      name: 'የቅዱስ ዮሐንስ መዝሙራት',
      icon: require('../icons/playlist.png'),
      color: '#45B7D1',
      image: require('../assets/images/yohannes.jpg'), 
      subcategories: [
        {
          id: 'st_john_ezil_araray',
          name: 'እዝል ዓራራይ ቅኝት',
          image: require('../assets/images/yohannes.jpg'), 
          songs: [
            {
              id: 177,
              title: 'እምሄሶ ለሄሮድስ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/yohannes.jpg'),
              audio_url: require('../assets/music/Emheso_leherodse_edited.opus'),
              duration: 140,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'እምሄሶ ለሄሮድስ ይብላ መሐላሁ (2) እምያምትር ርዕሶ ለዮሐንስ(2)' },
                { timestamp: 20, text: 'ዐቢይ ነቢይ(2)ሰባኬ ጥምቀት(2)' },
                { timestamp: 40, text: 'ትርጉም፡ ሄሮድስ የዮሐንስን ራስ ከሚያስቆርጥ መሐላውን ቢበላ በተሻለ ነበር ጥምቀትን የሰበከ ታላቅ ነቢይ ነውና' }
              ],
            },
            {
              id: 178,
              title: 'ዐቢይ ነቢይ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/yohannes.jpg'),
              // audio_url: 'TODO: add local file for song id 178',
              duration: 100,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ዐቢይ ነቢይ (2) ዮሐንስ(2) ዐቢይ ነቢይ(2)' },
                { timestamp: 15, text: 'ትርጉም፡ ዮሐንስ ታላቅ ነቢይ ነው' }
              ],
            },
            {
              id: 179,
              title: 'ዮሐንስ ክቡር',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/yohannes.jpg'),
              // audio_url: 'TODO: add local file for song id 179',
              duration: 120,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ዮሐንስ ክቡር ነቢየ ልዑል(2) ብእሴ ሰላም(4)ዘንብረቱ (2)ገዳም (2)' },
                { timestamp: 20, text: 'ትርጉም፡ የከበረ የልዑል ነቢይ ዮሐንስ ሆይ መኖሪያው በገዳም የሆነ የሰላም ሰው ነው' }
              ],
            },
            {
              id: 180,
              title: 'ወአንተኒ ሕጻን',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/yohannes.jpg'),
              // audio_url: 'TODO: add local file for song id 180',
              duration: 130,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ወአንተኒ ሕጻን ነቢየ ልዑል(2) አርኩ ለመርዓዊ ትሰመይ(2)ነቢየ ልዑል(2)' },
                { timestamp: 20, text: 'ትርጉም፡ አንተ ሕጻን የልዑል ነቢይ የሙሽራው ክርስቶስ መንገድ ጠራጊ ትባላለህ ትሰኛለህ' }
              ],
            },
            {
              id: 181,
              title: 'በመንፈስ የሐውር',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/yohannes.jpg'),
              // audio_url: 'TODO: add local file for song id 181',
              duration: 120,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'በመንፈስ የሐውር እምኃይል ውስተ ኃይል(2) ካህን(2)ወነቢይ ካህን ወነቢይ ዮሐንስ መጥምቅ(2)' },
                { timestamp: 20, text: 'ትርጉም፡ ከኃይል ወደ ኃይል በመንፈስ ይሄዳል ዮሐንስ መጥምቅ ካህንና ነቢይ ነው' }
              ],
            },
            {
              id: 182,
              title: 'ወአንተኒ ዮሐንስ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/yohannes.jpg'),
              // audio_url: 'TODO: add local file for song id 182',
              duration: 150,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ወአንተኒ ዮሐንስ ነቢየ ልዑል ትሰመይ(2) ነቢየ ልዑል(2)' },
                { timestamp: 20, text: 'እስመ ተሐውር ቅድመ እግዚአብሔር(2) ከመ ትጺሕ ፍኖቶ(2)' },
                { timestamp: 40, text: 'ትርጉም፡ አንተ ሕጻን የልዑል ነቢይ ትባላለህ (ትሰኛለህ) በእግዚአብሔር ፊት የሚሄድ የሙሽራው ክርስቶስ መንገድ ጠራጊ ነህ' }
              ],
            },
            {
              id: 183,
              title: 'ዮም ነፍስከ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/yohannes.jpg'),
              // audio_url: 'TODO: add local file for song id 183',
              duration: 180,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ዮም ነፍስከ አዕረጉ መላእክት ሚካኤል ወገብርኤል ዑራኤል ወሩፋኤል ሊቃነ መላእክት(2)' },
                { timestamp: 30, text: 'እንዘ እንዘ ይብሉ ስብሐት ካህናተ ኢትዮጵያ አማን በአማን ቅዱስ ዮሐንስ መሠረተ ቤተክርስቲያን(2)' },
                { timestamp: 60, text: 'ትርጉም፡ ቅዱስ ዮሐንስ መላእክት ሚካኤል ገብርኤል ኡራኤልና ሩፋኤል ነፍስን አሳረጉ የኢትዮጵያ ካህናት እውነት በእውነት ምስጋና ይሁን ቅዱስ ዮሐንስ የቤተክርስቲያን መሠረት ነው ይላሉ' }
              ],
            },
            {
              id: 184,
              title: 'ዮሐንስኒ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/yohannes.jpg'),
             audio_url: require('../assets/music/Yohansni_Halo_Yatemk.opus'),
              duration: 110,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ዮሐንስኒ ሀሎ ያጠምቅ (2) በሄኖን በቅሩበ ሳሌም(2)' },
                { timestamp: 15, text: 'ትርጉም፡ ዮሐንስ በሳሌም አቅራቢያ በሄኖን በዮርዳኖስ ማዶ ያጠምቅ ነበረ' }
              ],
            },
            {
              id: 185,
              title: 'የአዋጅ ነጋሪ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/yohannes.jpg'),
              // audio_url: 'TODO: add local file for song id 185',
              duration: 260,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'የአዋጅ ነጋሪው ቃል በበረሃ አየለ የእግዚአብሔርን መንገድ አስተካክሉ እያለ' },
                { timestamp: 25, text: 'ምስክርነቱን ዮሐንስ ካስረዳን ልባችን ለጌታ መልካም መንገድ ይሁን' },
                { timestamp: 50, text: 'የደናግል መመኪያ የነቢያት ገዳም ዐውደ ዓመቱን ባርኪልን ድንግል ማርያም' },
                { timestamp: 75, text: 'ተራራው ዝቅ ይበል ጠማማውም ይቅና ካልተስተካከለ መንገድ የለምና' },
                { timestamp: 100, text: 'የእግዚአብሔርን መንገድ እንጥረግ ሁላችን ማለፊያ እንዲሆነን ወደ አምላካችን' },
                { timestamp: 125, text: 'ክፋትና ተንኮል ከልባችን ይጥፋ ጽድቅና ርኅራኄ በእኛ ላይ ይስፋፋ' },
                { timestamp: 150, text: 'ሥጋና ደምህን በክብር አግኝተናል ሕይወት እንዲሆነን አምላክ ተማጽነናል' },
                { timestamp: 175, text: 'ሁለት ልብሶሽ ያሉት ከማብዛት ልብስን ለሌለው ያድለው ሁለተኛውን' },
                { timestamp: 200, text: 'ከበደላችንም አንጻን አደራህ በክፉ እንዳንጠፋ እኛ ባሮችህ' }
              ],
            },
            {
              id: 186,
              title: 'ምን ሰማ ዮሐንስ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/yohannes.jpg'),
              // audio_url: 'TODO: add local file for song id 186',
              duration: 280,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ምን ሰማህ ዮሐንስ በማኀፀን ሳለህ (2) ሕጻን ሆነህ ነቢይ ለክብር የተጠራህ(2)' },
                { timestamp: 30, text: 'እንደ እንቦሳ ጥጃ ያዘለለህ ደስታ(2) ምን ዓይነት ድምጽ ነው ምን ዓይነት ሰላምታ(2)' },
                { timestamp: 60, text: 'ከተፈጥሮ በላይ ያሰገደህ ክብር እንዴት ቢገባህ ነው የእናታችን ፍቅር(2)' },
                { timestamp: 90, text: 'ሌላ ድምጽ አልሰማም ከእንግዲህ በኋላ ለውጦኛልና የሰላምታ ቃሏ(2)' },
                { timestamp: 120, text: 'በረሃ ያስገባህ ለብዙ ዘመናት ምን ያለ ራዕይ እንዴት ያለ ብሥራት(2)' },
                { timestamp: 150, text: 'እንደ አዲስ ምስጋና ስልቱ የተዋበ ተደምጦ የማያውቅ ጭራሽ ያልታሰበ(2)' },
                { timestamp: 180, text: 'ከሴት ከተገኙ ከደቂቀ አዳም ድንግል ስለሆነ በሕይወቱ ፍጹም(2)' },
                { timestamp: 210, text: 'ከማኅፀን ሳለ ተመርጦ በጌታ ለማዳመጥ በቃ የኪዳን ሰላምታ(2)' }
              ],
            }
          ],
        },
        {
          id: 'st_john_geez_1',
          name: 'ግእዝ 1',
          image: require('../assets/images/yohannes.jpg'), 
          songs: [
            {
                id: 187,
                title: 'በብዙ አኅጉር',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/yohannes.jpg'),
                audio_url: require('../assets/music/Bebzu_ahgur_yezork_edited.opus'),
                duration: 120,
                genre: 'ግእዝ 1',
                lyrics: [
                  { timestamp: 0, text: 'በብዙ አኅጉር የዞርክ የጌታን ወንጌል ያስተማርክ' },
                  { timestamp: 20, text: 'የወንጌሉን ቃል በግብር የፈጸምክ ብፁዕ ነህ' },
                  { timestamp: 40, text: '(2)ዮሐንስ ድንቅ ነህ(2)' }
                ],
              },
              {
                id: 188,
                title: 'ኀበ ጥበባት',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/yohannes.jpg'),
                audio_url: require('../assets/music/Habe_tebebate_yeyohanes_edited.opus'),
                duration: 100,
                genre: 'ግእዝ 1',
                lyrics: [
                  { timestamp: 0, text: 'ኀበ ጥበባት ኀበ ልሳናት (4)' },
                  { timestamp: 15, text: 'ዮሐንስ (2)ወንጌለ ስብከት (2)' }
                ],
              }
          ],
        },
        {
          id: 'st_john_geez_2',
          name: 'ግእዝ 2',
          image: require('../assets/images/yohannes.jpg'), 
          songs: [
            {
              id: 189,
              title: 'ዮሐንስ መጥምቀ መለኮት',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/yohannes.jpg'),
              audio_url: require('../assets/music/Yohannes_metmke_melekot_edited.opus'),
              duration: 110,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'ዮሐንስ መጥምቀ መለኮት(2)' },
                { timestamp: 15, text: 'በረከትህ ይደር በእኛ ሕይወት(2)' }
              ],
            },
            {
              id: 190,
              title: 'መጽአት ወለታ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/yohannes.jpg'),
              audio_url: require('../assets/music/Metsat_weleta_edited.opus'),
              duration: 140,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'መጽአት ወለታ ለሄሮድያዳ ኀበ ንጉሥ ወትቤሎ ሀበኒ በጻሕል(2)' },
                { timestamp: 20, text: 'ሀበኒ በጻሕል ርዕሰ ዮሐንስ ወንጌላዊ(3)ክቡር(2)' },
                { timestamp: 40, text: 'ትርጉም፡ የሄሮድያዳ ልጅ ወደ ንጉሥ መጣች የከበረ ወንጌላዊ ዮሐንስ ራስን በጻሕል በትሪ ስጠኝ አለች' }
              ],
            }
          ],
        },
        {
          id: 'st_john_geez_3',
          name: 'ግእዝ 3',
          image: require('../assets/images/yohannes.jpg'), 
          songs: [
            {
              id: 191,
              title: 'ዮሐንስኒ ያጠምቅ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/yohannes.jpg'),
              audio_url: require('../assets/music/Yohanesni_yatemk_edited.opus'),
              duration: 210,
              genre: 'ግእዝ 3',
              lyrics: [
                { timestamp: 0, text: 'ዮሐንስኒ ያጠምቅ ዮሐንስኒ ያጠምቅ በሄኖን (4) በማዕዶተ ዮርዳኖስ' },
                { timestamp: 30, text: 'ዮሐንስ ሲያስተምር ያጠምቅ በጫካ በሜዳ ያጠምቅ' },
                { timestamp: 60, text: 'የግመል ፀጉር ለብሶ ያጠምቅ ሆኖ ምድረ በዳ ያጠምቅ' },
                { timestamp: 90, text: 'አምላኩን የሚወድ ያጠምቅ ብዙ ሰው እያለ ያጠምቅ' },
                { timestamp: 120, text: 'ጌታውን ለማጥመቅ ያጠምቅ ዮሐንስ ታደለ ያጠምቅ' },
                { timestamp: 150, text: 'ኮረብታው ይደልደል ያጠምቅ ጠማማውም ይቅና ያጠምቅ' },
                { timestamp: 170, text: 'እያለ ሰበከ ያጠምቅ ሥርዓቱ ነውና ያጠምቅ' },
                { timestamp: 190, text: 'ከኃጢአት ተለዩ ያጠምቅ በውኃ ተጠመቁ ያጠምቅ' },
                { timestamp: 200, text: 'መንግሥተ ሰማያት እንዳለች እወቁ ያጠምቅ' }
              ],
            }
          ],
        },
      ],
    },

    // ═══════════════════════════════════════════════════════
    // CATEGORY 3
    // ═══════════════════════════════════════════════════════
    {
      id: 'yedebretabor_mezmur',
      name: 'የደብረ ታቦር መዝሙር ',
      icon: require('../icons/playlist.png'),
      color: '#45B7D1',
      image: require('../assets/images/debretabor.png'), 
      subcategories: [
        {
          id: 'yedebretabor_mezmur_geez_1',
          name: 'ግእዝ 1',
          image: require('../assets/images/debretabor.png'), 
          songs: [
              {
                id: 192,
                title: 'ቡሄ በሉ',
                artist: 'Traditional',
                cover_url: require('../assets/images/debretabor.png'),
                // audio_url: 'TODO: add local file for song id 192',
                duration: 480,
                genre: 'ግእዝ 1',
                lyrics: [
                  { timestamp: 0, text: 'ቡሄ በሉ (፪) - - ሆ ልጆች ሁሉ - - ሆ የኛማ ጌታ - - ሆ የዓለም ፈጣሪ - - ሆ' },
                  { timestamp: 20, text: 'የሰላም አምላክ - -ሆ ትሁት መሀሪ -ሆ በደብረ ታቦር - - ሆ የተገለጠው - ሆ' },
                  { timestamp: 40, text: 'ፊቱ እንደ ፀሐይ - ሆ በርቶ የታየው -ሆ ልብሱ እንደብርሃን -ሆ ያንፀባረቀው -ሆ' },
                  { timestamp: 60, text: 'ድምጽህን ሰማና በብህሩ ደመና(፪) የቡሄው ብርሃን ለኛ መጣልን(፪)' },
                  { timestamp: 85, text: 'ያዕቆብ ዮሐንስ-ሆ እንዲሁም ጴጥሮስ-ሆ አምላክን አዩት - - ሆ ሙሴ ኤልያስ - ሆ' },
                  { timestamp: 105, text: 'አባትም አለ - - ሆ ቃሌን ስሙት - - ሆ ልጄ ነውና - - ሆ የወለድኩት - - ሆ' },
                  { timestamp: 125, text: 'ታቦር አርሞንኤም-ሆ ብርሃን ታየባቸው ሆ ከቅዱስ ተራራ ሆ ስምህ ደስ አላቸው- ሆ' },
                  { timestamp: 145, text: 'ሰላም ሰላም - - ሆ የታቦር ተራራ - - ሆ ብርሀነ መለኮት - ሆ ባንቺ ላይ አበራ -ሆ' },
                  { timestamp: 165, text: 'በተዋህዶ - - ሆ ወልድ የከበረው - ሆ የእግዚአብሔር አብ ልጅ - - ሆ ወልደማርያም ነው - -ሆ' },
                  { timestamp: 185, text: 'ቡሄ በሉ - - ሆ ቡሄ በሉ - - ሆ የአዳም ልጆች - - ሆ ብርሃንን - - ሆ ተቀበሉ - -ሆ' },
                  { timestamp: 205, text: 'አባቴ ቤት - - ሆ አለኝ ለከት - - ሆ እናቴ ቤት - - ሆ አለኝ ለከት - - ሆ' },
                  { timestamp: 220, text: 'ከአጎቴም ቤት - - - ሆ አለኝ ለከት - ሆ ተከምሯል - - ሆ እንደ ኩበት - - ሆ' },
                  { timestamp: 235, text: 'የዓመት ልምዳችን - - ሆ ከጥንት የመጣው - - ሆ ከተከመረው - ሆ ከመሶቡ ይውጣ - ሆ' },
                  { timestamp: 250, text: 'ከደብረ ታቦር - - ሆ ጌታ ሰለመጣ -ሆ የተጋገረው - ሆ ሙልሙሉ ይምጣ -ሆ' },
                  { timestamp: 270, text: 'ኢትዮጵያውያን - -ሆ ታሪክ ያላችሁ - ሆ ባህላችሁን - ሆ ያዙ አጥብቃችሁ - ሆ' },
                  { timestamp: 290, text: 'ችቦውን አብሩት -ሆ እንዳባቶቻችሁ -ሆ ምስጢር ስላለው -ሆ ደስ ይበላችሁ -ሆ' },
                  { timestamp: 310, text: 'ለድንግል ማርያም ሆ አሥራት የሆንሽ ሆ ቅዱሳን ጻድቃን - - ሆ የሞሉብሽ - - ሆ' },
                  { timestamp: 330, text: 'ሀገረ እግዚአብሔር -ሆ ኢትዮጵያ ነሽ ሆ በረከተ ቡሄ - ሆ ለሁላችን ይድረስ -ሆ' },
                  { timestamp: 350, text: 'ዓመት ዓውዳመት ድገም እና ዓመት ድገም እና በጋሽዬ ቤ ድገም እና ዓመት ድገም እና' },
                  { timestamp: 380, text: 'እንዲሁ እንዳላችሁ - -በፍቅር አይለያችሁ - - በፍቅር ላመቱ በሰላም - - በፍቅር ያድርሳችሁ' },
                  { timestamp: 410, text: 'የቅዱሳን መላክት የፃድቃን ሰማዕታት ረድኤት በረከት ይግባ በሁሉም ቤት' },
                  { timestamp: 440, text: 'ባህላችሁን የአባቶች ትውፊት (፫)' }
                ],
              },
              {
                id: 193,
                title: 'አማን በአማን',
                artist: 'Traditional',
                cover_url: require('../assets/images/debretabor.png'),
                audio_url: require('../assets/music/Aman_Beaman_Yedebre_Tabor.opus'),
                duration: 110,
                genre: 'ግእዝ 1',
                lyrics: [
                  { timestamp: 0, text: 'አማን በአማን /4/ ተሰብሐ በደብረታቦር/4/' }
                ],
              }
          ]
        },
        {
          id: 'yedebretabor_mezmur_ezil_araray',
          name: 'እዝል ዓራራይ ቅኝት',
          image: require('../assets/images/debretabor.png'), 
          songs: [
              {
                id: 194,
                title: 'በስመ ዚአከ ይትፌስሑ ዮም',
                artist: 'Traditional',
                cover_url: require('../assets/images/debretabor.png'),
                audio_url: require('../assets/music/Besime_Ziake.opus'),
                duration: 110,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'በስመ ዚአከ ይትፌስሑ ዮም ታቦር ወአርሞንየም' },
                  { timestamp: 20, text: 'ትርጉም ፡- ታቦር እና አርሞንየም ዛሬ በስምህ ደስ አላቸው' }
                ],
              },
              {
                id: 195,
                title: 'አሐደ ለከ',
                artist: 'Traditional',
                cover_url: require('../assets/images/debretabor.png'),
                audio_url: require('../assets/music/Ahade_Leke.opus'),
                duration: 120,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'አሐደ ለከ ወአሐደ ለሙሴ(2) ወአሐደ ለኤልያስ(2) ንግበር ማኀደረ /2/' },
                  { timestamp: 25, text: 'ትርጉም፡ - አንዱን ለአንተ አንዱንም ለሙሴ(2) አንዱንም ለኤልያስ(2) እንስራ ቤት(2)' }
                ],
              },
              {
                id: 196,
                title: 'በደብረ ታቦር',
                artist: 'Traditional',
                cover_url: require('../assets/images/debretabor.png'),
                audio_url: require('../assets/music/Sebahuke_Bedebre_Tabor.opus'),
                duration: 100,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'በደብረ ታቦር /2/ ሰባሕኩከ(3) በደብረ ታቦር /4/' }
                ],
              },
              {
                id: 197,
                title: 'ታቦር አበራ',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/debretabor.png'),
                audio_url: require('../assets/music/Tabor_Abera.opus'),
                duration: 320,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'ታቦር አበራ ምድርን ከደናት ደመና እንቅልፍ የለንም ታላቅ ነጎጓድ ሆኗልና አነቃን ለምስጋና' },
                  { timestamp: 30, text: 'ሙሴም የቀደው ሰው ኤልያስ ኃይለኛው ተገኝተዋል በታቦር ምስክርህ ሆነው' },
                  { timestamp: 60, text: 'እኛም ከገናናው ክብር የአባቱን ቃል ሰምተናል በረዶ ሆኗል ልብሱ እፁብ እጹብ ብለናል' },
                  { timestamp: 90, text: 'ቃል ገብተህልኝ ነበር ልታሳየኝ ክብርህን ንገሥ ከሞት ቀስቅሰህ አይቼሀለሁ አሁን' },
                  { timestamp: 120, text: 'የእሳት ፈረሶች ያሉህ ተዋጊው የኔ ጌታ አርሞንኤም ደስ አለው ሲሳራን ስለመታ' },
                  { timestamp: 150, text: 'እጠብቅሀለሁኝ በምታልፍበት ቆሜ መብራቶቼን አብርቼ ነጩን ልብስ ተሸልሜ' },
                  { timestamp: 180, text: 'የዳዊት ልጅ ሆይ ግባ ኢየሱስ ወደ ቤቴ ጵኒኤል እልሀለሁ ድናለች ሰውነቴ' },
                  { timestamp: 210, text: 'ሁሉንም ብታከብር ሁሉንም ብትምረው ማነው ቸርነትህን የሚከለክለው' },
                  { timestamp: 240, text: 'ጠዋትም የተጠራ አምሽቶም የገባው ሆነዋል ባለዋጋ ከበዛው ስጦታው' },
                  { timestamp: 270, text: 'የረዳኸው ይናገር ያሰብከው በሕይወቱ አቤንኤዜር እያለ ይዘምር በአንደበቱ' },
                  { timestamp: 300, text: 'በደስታዬም ቀን አለህ አይሃለሁ ከጎኔ ከእኔ ጋር አልቅሰሀል አሳዝኖህ ሐዘኔ' }
                ],
              },
              {
                id: 198,
                title: 'እንዲህ አለው ጴጥሮስ',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/debretabor.png'),
                // audio_url: 'TODO: add local file for song id 198',
                duration: 210,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'እንዲህ አለው ጵጥሮስ ኢየሱስን ምስጢር ገሐድ ሲሆን በዚ በተራራ' },
                  { timestamp: 20, text: 'በአንድ ላይ እንኑር ሦስት ዳስ እንስራ አንዱን ላንተ አንዱንም ለሙሴ አንዱን ለኤልያስ' },
                  { timestamp: 50, text: 'ተለወጠ ገጹ ከመ ጽጌሬዳ ወርዶ ከለላቸው ደመና ፀአዳ' },
                  { timestamp: 80, text: 'ከሰማይ ቃል መጣ እንደዚህ የሚል የምወደው ልጄን እርሱን ስሙት ሲል' },
                  { timestamp: 110, text: 'ኤልያስም ሄደ በሰረገላው ሙሴም ከመቃብር ወደ መኖሪያው' },
                  { timestamp: 140, text: 'ስላስደነቃቸው ግሩም ተአምራቱ ይሕን ምስጢር አይተው ተሰነባበቱ' }
                ],
              },
              {
                id: 199,
                title: 'በስመ ዚአከ (Full Version)',
                artist: 'Traditional',
                cover_url: require('../assets/images/debretabor.png'),
                audio_url: require('../assets/music/Besime_Ziake.opus'),
                duration: 100,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'በስመ ዚአከ ይትፌሥሑ ዮም /፪/ ታቦር ወአርሞንየም /፬/' },
                  { timestamp: 20, text: 'ትርጉም፦ ታቦርና አርሞንየም በስምህ ዛሬ ደስ ይላቸዋል፡፡' }
                ],
              }
          ]
        },
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CATEGORY 3
    // ═══════════════════════════════════════════════════════
    {
      id: 'yemeskel_beal',
      name: 'የመስቀል መዝሙራት',
      icon: require('../icons/playlist.png'),
      color: '#45B7D1',
      image: require('../assets/images/meskel.jpg'), 
      subcategories: [
        {
          id: 'yemeskel_sub_1',
          name: 'እዝል ዓራራይ ቅኝት',
          image: require('../assets/images/meskel.jpg'), 
          songs: [
            {
              id: 200,
              title: 'በመስቀልከ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/meskel.jpg'),
              audio_url: require('../assets/music/Bemeskelke_Redane.opus'),
              duration: 185,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'በመስቀልከ ርድዐነ/፪/' },
                { timestamp: 5, text: 'ወበኃይልከ ተማኅጸነ/፪/' },
                { timestamp: 10, text: 'ትርጉም ፡- በመስቀልክ እርዳን በኃይልህ ተማጽነናል' }
              ],
            },
            {
              id: 201,
              title: 'መስቀል ብርሃን',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/meskel.jpg'),
              audio_url: require('../assets/music/Meskel_Birhane_Lekulu_Alem.opus'),
              duration: 160,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'መስቀል ብርሃን ለኲሉ ዓለም/፪/' },
                { timestamp: 5, text: 'መሠረተ/፫/ ቤተክርስቲያን' },
                { timestamp: 10, text: 'ትርጉም ፡- ለዓለም ብርሃን የሚሆን መስቀል የቤተክርስቲያን መሠረት ነው' }
              ],
            },
            {
              id: 202,
              title: 'መስቀል ብርሃን(ወሀቤ)',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/meskel.jpg'),
              audio_url: require('../assets/music/Meskel_birhan_kutr2_edited.opus'),
              duration: 210,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'መስቀል ብርሃን ለኲሉ ዓለም መሠረተ ቤተክርስቲያን /፪/' },
                { timestamp: 5, text: 'ወሀቤ ሰላም መድኃኔዓለም መስቀል መድኅን ለእለ ነአምን/፪/' },
                { timestamp: 10, text: 'መስቀል ብርሃን ነው ለመላው ዓለም' },
                { timestamp: 15, text: 'መሠረት ነው ለቤተክርስቲያን /፪/' },
                { timestamp: 20, text: 'ሰላምን ሰጪ ነው መድኃኔዓለም መስቀል' },
                { timestamp: 25, text: 'አዳኝ ነው ለምናምን ሰዎች /፪/' }
              ],
            },
            {
              id: 203,
              title: 'መስቀል ኃይልነ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/meskel.jpg'),
              audio_url: require('../assets/music/Meskel_Haile.opus'),
              duration: 190,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'መስቀል ኃይልነ መስቀል ጽንዕነ መስቀል ቤዛነ/፪/' },
                { timestamp: 5, text: 'መድኀኒትነ ለዕለ አመነ/፪/' },
                { timestamp: 10, text: 'ትርጉም፡- መስቀል ኀይላችን ነው መስቀል ብርታታችን ነው መስቀል ቤዛችን ነው' },
                { timestamp: 15, text: 'ለእኛ ለምናምነው መድኃኒታችን ነው' }
              ],
            },
            {
              id: 204,
              title: 'ጸጋ ነሣእነ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/meskel.jpg'),
              audio_url: require('../assets/music/Seganesayne.opus'),
              duration: 240,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ጸጋ ነሣእነ ወሕይወተ ረከብነ በኃይለ መስቀሉ' },
                { timestamp: 5, text: 'ለኢየሱስ ክርስቶስ በኃይለ መስቀሉ/፪/' },
                { timestamp: 10, text: 'ኪያከ እግዚኦ ነአኲት ወንሴብሐከ እግዚአብሔር/፪/' },
                { timestamp: 15, text: 'ጸጋን ተቀበልን ሕይወትንም አገኘን በመስቀሉ ኃይል' },
                { timestamp: 20, text: 'በኢየሱስ ክርስቶስ በመስቀሉ ኃይል/፪/' },
                { timestamp: 25, text: 'አቤቱ አንተ/፪/ እናመሰግንሃለን እግዚአብሔር/፪/' }
              ],
            },
            {
              id: 205,
              title: 'ዘእጣን አንጸረ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/meskel.jpg'),
              // audio_url: 'TODO: add local file for song id 205',
              duration: 175,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ዘእጣን አንጸረ/፬/' },
                { timestamp: 5, text: 'በጎልጎታ ተረክበ ዕፀ መስቀል/፬/' },
                { timestamp: 10, text: 'ትርጉም ፡-እጣኑ ያመለከተው መስቀል በጎልጎታ ተገኘ፡፡' }
              ],
            },
            {
              id: 206,
              title: 'በወንጌሉ ያመናችሁ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/meskel.jpg'),
              audio_url: require('../assets/music/Bewengelu_Yamenachu_MeskelBeal.opus'),
              duration: 150,
              genre: 'እዝል',
              lyrics: [
                { timestamp: 0, text: 'በወንጌሉ ያመናችሁ/፪/' },
                { timestamp: 5, text: 'እንኳን ለብርሃነ መስቀሉ አደረሳችሁ/፪/' }
              ],
            },
            {
              id: 207,
              title: 'ይቤሎሙ ኢየሱስ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/meskel.jpg'),
              audio_url: require('../assets/music/Yibelomu_Eyesus.opus'),
              duration: 200,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ይቤሎሙ ኢየሱስ ለአይሁድ እመኑ ብየ/፪/' },
                { timestamp: 5, text: 'ወእመኑ በአቡየ አበርህ/፪/ በመስቀልየ/፪/' },
                { timestamp: 10, text: 'ትርጉም ፡- ኢየሱስ አይሁድን ዛሬስ በመስቀሌ ለወገኖቼ' },
                { timestamp: 15, text: 'አበራለሁና በእኔ እመኑ በአባቴም እመኑ አላቸው' }
              ],
            },
            {
              id: 208,
              title: 'ኃይልነ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/meskel.jpg'),
              audio_url: require('../assets/music/Haylene_Wesewenene.opus'),
              duration: 180,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ኃይልነ ወጸወንነ ወሞገስነ/፪/' },
                { timestamp: 5, text: 'ዝንቱ ውእቱ መስቀል/፪/' },
                { timestamp: 10, text: 'ትርጉም፡- ኃይላችን መጠጊያችንና ሞገሳችን ይህ መስቀል ነው' }
              ],
            },
            {
              id: 209,
              title: 'ኀበሩ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/meskel.jpg'),
              audio_url: require('../assets/music/Haberu_Kale.opus'),
              duration: 170,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ኀበሩ ቃለ ነቢያት /፪/' },
                { timestamp: 5, text: 'ወይቤሉ መሰቀል ብርሃን/፪/ ለኲሉ ዓለም/፪/' },
                { timestamp: 10, text: 'ትርጉም ፡- ነቢያት በአንድ ቃል በመተባበር መስቀል ለዓለም ሁሉ ብርሃን ነው አሉ፡፡' }
              ],
            },
            {
              id: 210,
              title: 'ዮም በዓለ መስቀሉ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/meskel.jpg'),
              audio_url: require('../assets/music/Yom_Beale_Meskelu.opus'),
              duration: 190,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ዮም በዓለ መስቀሉ በሰማያት በላዕሉ/፪/' },
                { timestamp: 5, text: 'ወዘነግሠ በምድር /፪/ ለአሕዛብ/፪/' },
                { timestamp: 10, text: 'ትርጉም፡- ዛሬ በሰማያት በምድርም ለአሕዛብ የመስቀል በዓል ነው' }
              ],
            },
            {
              id: 211,
              title: 'መስቀል ኃይላችን',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/meskel.jpg'),
              audio_url: require('../assets/music/Meskel_Haylachin.opus'),
              duration: 340,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'መስቀል መስቀል ኃይላችን ጠላትን ማጥፊያችን/፪/' },
                { timestamp: 5, text: 'በመስቀል እንመካለን እንድንበታለን/፪/' },
                { timestamp: 10, text: 'የክርስትያን ጋሻ መስቀል ኃይላችን' },
                { timestamp: 15, text: 'የክርስትያን ጦር መስቀል ኃይላችን' },
                { timestamp: 20, text: 'ዕፀ መስቀሉ ነው መስቀል ኃይላችን' },
                { timestamp: 25, text: 'የማያሳደፍር መስቀል ኃይላችን' },
                { timestamp: 30, text: 'መድኃኒት የሚሆን መስቀል ኃይላችን' },
                { timestamp: 35, text: 'ደሙ ፈሶበታል መስቀል ኃይላችን' },
                { timestamp: 40, text: 'መስቀሉን ጥግ አርጉ መስቀል ኃይላችን' },
                { timestamp: 45, text: 'እሱ ይፈውሳል መስቀል ኃይላችን' },
                { timestamp: 50, text: 'ክርስቶስ በደሙ መስቀል ኃይላችን' },
                { timestamp: 55, text: 'ስለቀደሰው መስቀል ኃይላችን' },
                { timestamp: 60, text: 'መስቀል ላመነበት መስቀል ኃይላችን' },
                { timestamp: 65, text: 'ድል ማድረጊያ ነው መስቀል ኃይላችን' },
                { timestamp: 70, text: 'የክርስቶስ ሥጋ መስቀል ኃይላችን' },
                { timestamp: 75, text: 'የተፈተተበት መስቀል ኃይላችን' },
                { timestamp: 80, text: 'መስቀል ኀይላችን ነው መስቀል ኃይላችን' },
                { timestamp: 85, text: 'የምንድንበት መስቀል ኃይላችን' },
                { timestamp: 90, text: 'ሕይወትን ለማግኘት መስቀል ኃይላችን' },
                { timestamp: 95, text: 'ከሞት ለመዳን መስቀል ኃይላችን' },
                { timestamp: 100, text: 'መመኪያ ኃይላችን መስቀል ኃይላችን' },
                { timestamp: 105, text: 'መስቀል አለልን መስቀል ኃይላችን' }
              ],
            },
            {
              id: 212,
              title: 'ደስ ይበለን እልል በሉ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/meskel.jpg'),
              audio_url: require('../assets/music/Desyibelen_Elilbelu.opus'),
              duration: 300,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ደስ ይበለን እልል በሉ/፪/' },
                { timestamp: 5, text: 'አልቀረም ተቀብሮ ተገኘ መስቀሉ /፪/' },
                { timestamp: 10, text: 'በብርሃን መላት ዓለምን በሙሉ/፪/' },
                { timestamp: 15, text: 'አዝ=====' },
                { timestamp: 20, text: 'ምን ቢተባበሩ ምቀኞች ቢጥሩ/፪/' },
                { timestamp: 25, text: 'ቅዱስ መስቀሉንም ሸሽገው ቢሰውሩ/፪/' },
                { timestamp: 30, text: 'አልቻሉም ሊያጠፉት ምን ቢተባበሩ/፪/' },
                { timestamp: 35, text: 'አዝ====' },
                { timestamp: 40, text: 'እሌኒ ነች ይህን መስቀል ያስገኘችው/፪/' },
                { timestamp: 45, text: 'ደመራን በቦታው በጥበብ ያስቆመችው/፪./' },
                { timestamp: 50, text: 'የተንኮልን ተራራ ያስቆፈረችው/፪/' },
                { timestamp: 55, text: 'አዝ====' },
                { timestamp: 60, text: 'በተራራ ተሰውሮ ለዘመናት/፪/' },
                { timestamp: 65, text: 'ተጥሎ በተንኮል ተደብቆ ከኖረበት/፪/' },
                { timestamp: 70, text: 'ተገለጠ ዛሬ በደመራ እሳት/፪/' },
                { timestamp: 75, text: 'አዝ===' },
                { timestamp: 80, text: 'ታሪካዊው የክርስቶስ ሕያው መስቀል/፪/' },
                { timestamp: 85, text: 'ተገለጸ ዛሬ በክብር በግሩም ኃይል/፪/' },
                { timestamp: 90, text: 'ምን ጊዜም ሲያበራ እንዲህ ይኖራል/፪/' }
              ],
            },
                {
                id: 213,
                title: 'ዕጸ መስቀል የክብር',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/meskel.jpg'),
                audio_url: require('../assets/music/Ese_Meskel.opus'),
                duration: 320,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'ዕጸ መስቀል የክብር መውረሻ ሰይጣንን ድል መንሻ/፪/' },
                  { timestamp: 5, text: 'አዝ===' },
                  { timestamp: 10, text: 'የክብር ባለቤት ዕጸ መስቀል የተሰዋበት ዕጸ መስቀል' },
                  { timestamp: 15, text: 'ዕጸ መስቀሉ ነው ዕጸ መስቀል' },
                  { timestamp: 20, text: 'የዓለም መድኃኒት ዕጸ መስቀል ' },
                  { timestamp: 25, text: 'አፍ=====' },
                  { timestamp: 30, text: 'እንደ እሌኒ ንግሥት ዕጸ መስቀል ፍጹም አክብራችሁ ዕጸ መስቀል' },
                  { timestamp: 35, text: 'ሁላችሁ ገስግሱ ዕጸ መስቀል መስቀሉን ይዛችሁ ዕጸ መስቀል' },
                  { timestamp: 40, text: 'አዝ======' },
                  { timestamp: 45, text: 'ያለ ኃይለ መስቀል ዕጸ መስቀል የሰላም አርማችን ዕጸ መስቀል' },
                  { timestamp: 50, text: 'ሊሸነፍ አይችልም ዕጸ መስቀል ሰይጣን ጠላታችን ዕጸ መስቀል' },
                  { timestamp: 55, text: 'አዝ=====' },
                  { timestamp: 60, text: 'እሳተ መለኮት ዕጸ መስቀል ያላቃጠለው ዕጸ መስቀል' },
                  { timestamp: 65, text: 'ጠላትን የሚያነድ ዕጸ መስቀል ዕጸ መስቀል ነው ዕጸ መስቀል' },
                  { timestamp: 70, text: 'አዝ====' },
                  { timestamp: 75, text: 'እንደ ተባረከው ዕጸ መስቀል ቆስጠንጢኖስ ንጉሥ ዕጸ መስቀል' },
                  { timestamp: 80, text: 'በመስቀል ብርሃን ዕጸ መስቀል ወደ እውነት እንገስግስ ዕጸ መስቀል' },
                  { timestamp: 85, text: 'አዝ====' },
                  { timestamp: 90, text: 'የተዋሕዶ ልጆች ዕጸ መስቀል ገስግሱ በተስፋ ዕጸ መስቀል' },
                  { timestamp: 95, text: 'ዕጸ መስቀል ያዙ ዕጸ መስቀል ጠላት እንዲጠፋ ዕጸ መስቀል' }
                ],
              },
              {
                id: 214,
                title: 'ለዕጸ መስቀሉ እንሰገድ',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/meskel.jpg'),
                audio_url: require('../assets/music/Letse_meskelu_ensged_edited.opus'),
                duration: 180,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'ለዕፀ መስቀሉ እንስገድ/፪/' },
                  { timestamp: 5, text: 'ጠላት እንዲጠፋ እንዲሆን አመድ' },
                  { timestamp: 10, text: 'ዕፀ መስቀሉን ያዙ ጋሻ /፪/' },
                  { timestamp: 15, text: 'ጠላት እንዲጠፋ እንዲያጣ መድረሻ' },
                  { timestamp: 20, text: 'ዕፀ መስቀሉን ተሳለሙ /፪/' },
                  { timestamp: 25, text: 'የአምላክ ኀይል አለበት ደመ ማኅተሙ' },
                  { timestamp: 30, text: 'ዕፀ መስቀሉን እንጠጋ /፪/' },
                  { timestamp: 35, text: 'ተሰባብሮ እንዲወድቅ የዲያቢሎስ መንጋ' },
                  { timestamp: 40, text: 'መስቀል ኃይል ነው ለክርስቲያን /፪/' },
                  { timestamp: 45, text: 'እርሱን ከተጠጋን አይደፍረንም ሰይጣን መመኪያችን ነው መስቀል/፪/ ተቀድስዋልና በመለኮት ኃይል ዕፀ መስቀሉ ያኮራናል/፪/እርሱን ከተጠጋን ጠላት ይፈራናል መዝ 17፤34' }
                ],
              },
              {
                id: 215,
                title: 'መስቀል ቤዛችን',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/meskel.jpg'),
                audio_url: require('../assets/music/Meskel_Bezachin_New.opus'),
                duration: 200,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'መስቀል ቤዛችን ነው ድል መንሻ ኀይላችን(2)' },
                  { timestamp: 5, text: 'ከኃጥያት በሽታ የሚፈውሰን(2)' },
                  { timestamp: 10, text: 'በኃጥያት ጨለማ ተውጠን ሳለን(2)' },
                  { timestamp: 15, text: 'የክርስቶስ መስቀል ብርሃን ሆነልን(2)' },
                  { timestamp: 20, text: 'እንድንመስለው ጌታችንን(2) እንሸከመው ዕፀ መስቀሉን(2)' },
                  { timestamp: 25, text: 'እንድንሸከም ዕፀ መስቀሉን(2) ሰውነታችንን ማንጻት አለብን(2) ማቴ 10፤38' }
                ],
              },
              {
                id: 216,
                title: 'መስቀልከ ይኩነነ',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/meskel.jpg'),
                audio_url: require('../assets/music/Meskelke_Yikunene_Beza.opus'),
                duration: 150,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'መስቀልከ ይኲነነ ቤዛ /፪/' },
                  { timestamp: 5, text: 'ይኲነነ ቤዛ /፬/ መስቀልከ ይኲነነ ቤዛ /፪/' },
                  { timestamp: 10, text: 'ትርጉም መስቀልህ ቤዛ ይሁነን' }
                ],
              },
              {
                id: 217,
                title: 'ከመ ትባርከነ',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/meskel.jpg'),
                audio_url: require('../assets/music/Kemetbarekene.opus'),
                duration: 165,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'ከመ ትባርከነ በመስቀልከ ዘወርቅ /፪/' },
                  { timestamp: 5, text: 'ተዋነይ በጽድቅ /፬/እስጢፋኖስ ሐመልማለ ወርቅ /፪' },
                  { timestamp: 10, text: 'ትርጉም በጽድቅ መንገድ የምትመላለስ ቅዱስ እስጢፋኖስ ሆይ በወርቅ መስቀልህ ትባርከን ዘንድ ና' }
                ],
              },
              {
                id: 218,
                title: 'ርእዩ እበዩ',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/meskel.jpg'),
                audio_url: require('../assets/music/Riyu_Ebeyu.opus'),
                duration: 175,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'ርእዩ እበዩ ለዕፀ መስቀል /፪/' },
                  { timestamp: 5, text: 'ዘመጠነዝ /፪/ ትርሲተ ክብር ትሕትና ወፍቅር/፪/' },
                  { timestamp: 10, text: 'ትርጉም ይህ ነው ተብሎ ሊታወቅ የማይችል የመስቀል የክብር የትሕትና ሽልማት እዩ ተመልከቱ' }
                ],
              },
              {
                id: 219,
                title: 'ዮም መስቀል',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/meskel.jpg'),
                // audio_url: 'TODO: add local file for song id 219',
                duration: 180,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'ዮም መስቀል አስተርአየ እለማሰኑ ፍጥረተ አሠነየ /፪/' },
                  { timestamp: 5, text: 'ዮም መስቀል ተኬነወ ወዘተጼወወ ሕዝበ በደሙ ቤዘወ /፪/' }
                ],
              },
              {
                id: 220,
                title: 'ዝንቱ መስቀል',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/meskel.jpg'),
                audio_url: require('../assets/music/Zintu_Meskel.opus'),
                duration: 210,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'ዝንቱ መስቀል ሕብስተ ሕይወት አፍረየ አውኃዘ ለነ ደመ ወማየ አውኃዘ ለነ /፪/' },
                  { timestamp: 10, text: 'ከመ ጌራወርቅ ጽሩይ ሥርግው በባሕርይ መስቀል ነቢሮ ያስተርኢ ላዕለ ርዕስየ /፪' },
                  { timestamp: 20, text: 'ትርጉም ይህን መስቀል የሕይወት ምግብን አፈራልን ውሃና ደምን አፈሰሰልን እንደተመረጠ እንደ ወርቅ አክሊል በራሴ ላይ ተቀምጦ ይታይ' }
                ],
              },
              {
                id: 221,
                title: 'እንተ ተሐንጸት',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/meskel.jpg'),
                audio_url: require('../assets/music/Ente_tehantset_edited.opus'),
                duration: 195,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'እንተ ተሐንጸት በስሙ ወተቀደሰት በደሙ ቤተ ክርስቲያን /፪/' },
                  { timestamp: 5, text: 'ወተአትበት /፪/ በዕጸ መስቀሉ እስመ ኃያለ እግዚአብሔር ላዕሌሃ /፪/' },
                  { timestamp: 10, text: 'ቤተክርስቲያን በስሙ የታነጸች በደሙም የተቀደሰች በመስቀሉም የታተመች የእግዚአብሔር ኃይል በላይዋ የሆነባት ነች' }
                ],
              },
              {
                id: 222,
                title: 'መስቀሉሰ',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/meskel.jpg'),
                audio_url: require('../assets/music/Meskeluse_Lekirstos.opus'),
                duration: 175,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'መስቀሉሰ ለክርስቶስ ብርሃን ለእለነአምን ትብል ቤተክርስቲያን/፪/' },
                  { timestamp: 5, text: 'ዛህኑ ለባሕር ወመርሶ ለአሕማር ዝንቱ ውእቱ መስቀል/፪/' },
                  { timestamp: 10, text: 'ትርጉም ፡- ቤተክርስቲያን የክርስቶስ መስቀል ለእኛ ለምእመናን ብርሃን የባሕር ጸጥታና የመርከቦች ወደብ ነው ትላለች' }
                ],
              },
              {
                id: 223,
                title: 'መስቀል አብርሃ',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/meskel.jpg'),
                audio_url: require('../assets/music/Meskel_Abrha.opus'),
                duration: 160,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'መስቀል አብርሃ በከዋክብት አሠርገወ ኢትዮጵያ /፪/' },
                  { timestamp: 5, text: 'እምኲሉሰ ፀሐየ አርአየ እግዚአብሔር /፪' },
                  { timestamp: 10, text: 'ትርጉም መስቀል ኢትዮጵያን በከዋክብት ሸለማት አበራት ከሁሉም ይበልጥ እግዚአብሔር ፀሐይ አሳየ' }
                ],
              },
              {
              id: 224,
              title: 'በመስቀልከ (ኧኸ)',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/meskel.jpg'),
              audio_url: require('../assets/music/Ehe_Bemeskelke.opus'),
              duration: 190,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ኧኸ በመስቀልከ ኧኸ ጽልመተ አብራህከ /፪/' },
                { timestamp: 10, text: 'ኧኸ በመስቀልከ ኧኸ ሙታነ አንሣዕከ  /፪/' },
                { timestamp: 20, text: 'ኧኸ ለዘተሀጉለ ረዳዕከ በመስቀልከ /፪/' },
                { timestamp: 30, text: 'ትርጉም በመስቀልህ ጨለማን አስወገድህ በመስቀልህ ሙታንን አነሣህ በመስቀልህ የጠፋውንም ረዳህ' }
              ],
            },
          ],
        },
        {
          id: 'yemeskel_sub_2',
          name: 'ግእዝ 1',
          image: require('../assets/images/meskel.jpg'), 
          songs: [
            {
              id: 225,
              title: 'ወሪዶ እመስቀሉ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/meskel.jpg'),
              audio_url: require('../assets/music/Werido_Emeskelu.opus'),
              duration: 160,
              genre: 'ግእዝ 1',
              lyrics: [
                { timestamp: 0, text: 'ወሪዶ እመስቀሉ /፪/' },
                { timestamp: 5, text: 'እመስቀሉ አብርሃ ለኲሉ/፪/' },
                { timestamp: 10, text: 'ትርጉም ፡- ከመስቀሉ ወርዶ ለሁሉም አበራ' }
              ],
            },
            {
              id: 226,
              title: 'ይትቀደስ ስምከ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/meskel.jpg'),
              audio_url: require('../assets/music/Yitkedes_Simke.opus'),
              duration: 200,
              genre: 'ግእዝ 1',
              lyrics: [
                { timestamp: 0, text: 'ይትቀደስ ስምከ' },
                { timestamp: 5, text: 'በኃይለ መስቀልከ በዕጸ መስቀልከ' },
                { timestamp: 10, text: 'ክቡር ዘአዕበይኮነ ለስምከ/፪/' },
                { timestamp: 15, text: 'ስብሐት ለከ ለባሕቲትከ ልዑል/፬/' },
                { timestamp: 20, text: 'ትርጉም ፡- ክቡር በሆነው በዕፀ መስቀልህ' },
                { timestamp: 25, text: 'ኃይል ስምህ ይመስገን ዘንድ ስምህን ከፍ ከፍ ያደረግከው' },
                { timestamp: 30, text: 'ልዑል አምላክ ሆይ ለአንተ ለብቻህ ምስጋና ይገባሃል' }
              ],
            },
            {
              id: 227,
              title: 'ዮምሰ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/meskel.jpg'),
              audio_url: require('../assets/music/Yomse_leeliyaye_edited.opus'),
              duration: 120,
              genre: 'ግእዝ 1',
              lyrics: [
                { timestamp: 0, text: 'ዮምሰ ለእሊዓየ/፪/' },
                { timestamp: 5, text: 'አበርህ በመስቀልየ/፬/' },
                { timestamp: 10, text: 'ትርጉም፡- ዛሬ ለወገኖቼ በመስቀል አበራለሁ' }
              ],
            },
            {
              id: 228,
              title: 'ጥልን በመስቀሉ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/meskel.jpg'),
              audio_url: require('../assets/music/Tiln.opus'),
              duration: 100,
              genre: 'ግእዝ 1',
              lyrics: [
                { timestamp: 0, text: 'ጥልን በመስቀሉ ገደለ(2)' },
                { timestamp: 5, text: 'በመስቀሉ ለሰው ልጅ ሰላምን አደለ(2)' }
              ],
            },
            {
              id: 229,
              title: 'በመስቀሉ ወበቃሉ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/meskel.jpg'),
              audio_url: require('../assets/music/Bemeskelu_Webekalu.opus'),
              duration: 150,
              genre: 'ግእዝ 1',
              lyrics: [
                { timestamp: 0, text: 'በመስቀሉ ወበቃሉ/፪/' },
                { timestamp: 5, text: 'አዕበዮሙ ለአበዊነ/፬/' },
                { timestamp: 10, text: 'ትርጉም ፡- በመስቀሉና በቃሉ አባቶቻችንን' },
                { timestamp: 15, text: 'ከፍ ከፍ አደረጋቸው፡' }
              ],
            },
            {
              id: 230,
              title: 'መስቀል ተመርኩዘን',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/meskel.jpg'),
              audio_url: require('../assets/music/Meskel_Temerkuzen.opus'),
              duration: 300,
              genre: 'ግእዝ 1',
              lyrics: [
                { timestamp: 0, text: 'መስቀል ተመርኩዘን ወንጌል ተጫምተን' },
                { timestamp: 5, text: 'ሃይማኖትን ሰብከን በክርስቶስ አምነን' },
                { timestamp: 10, text: 'ማን ያሸንፈናል እኛ ክርስቲያንን ክርስቶስ አለልን(2)' },
                { timestamp: 15, text: 'ንግሥቲቷ እሌኒ በጣም የታደለች' },
                { timestamp: 20, text: 'በእጣን ጢስ ተመርታ መስቀሉን አገኘች' },
                { timestamp: 25, text: 'መድኀኒት ስትፈልግ ኪራኮስን ይዛ' },
                { timestamp: 30, text: 'መስቀሉን አገኘች የዓለሙን ቤዛ' },
                { timestamp: 35, text: 'ምውታን ተነስተው ያመሰገኑት' },
                { timestamp: 40, text: 'ዕጸ መስቀሉ ነው የእኛ መድኀኒት' },
                { timestamp: 45, text: 'መስቀል ምርኩዛችን ጎዳናው ወንጌል' },
                { timestamp: 50, text: 'ወደገነት እንጂ አንሄድም ሲዖል' },
                { timestamp: 55, text: 'ገላ 6÷13-14' }
              ],
            },
            {
              id: 231,
              title: 'አለው አለው ሞገስ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/meskel.jpg'),
              audio_url: require('../assets/music/Alew_Alew_Mogese.opus'),
              duration: 320,
              genre: 'ግእዝ 1',
              lyrics: [
                { timestamp: 0, text: 'አለው/፪/ሞገስ ኧኸ' },
                { timestamp: 5, text: 'አለው ሞገስ/፪/ የመስቀል በዓል ሲደርስ' },
                { timestamp: 10, text: 'ኧኸ አለው ሞገስ' },
                { timestamp: 15, text: 'አለው/፪/አበባ /፪/ኧኸ አለው አበባ/፪/ የመስቀል በዓል ሲገባ' },
                { timestamp: 20, text: 'ኧኸ አለው አበባ' },
                { timestamp: 25, text: 'አለው/፪/ደስታ ኧኸ አለው ደስታ፪/ መስቀል ሲከብር በእልልታ' },
                { timestamp: 30, text: 'ኧኸ አለው ደስታ' },
                { timestamp: 35, text: 'አለው/፪/ሰላም ኧኸ አለው ሰላም መስቀል ሲታይ በዓለም' },
                { timestamp: 40, text: 'ኧኸ አለው ሰላም ' },
                { timestamp: 45, text: 'አለን/፪/አለኝታ ኧኸ አለን አለኝታ/፪/ እፀ መስቀል መከታ' },
                { timestamp: 50, text: 'ኧኸ አለን አለኝታ' },
                { timestamp: 55, text: 'እዩት/፪/ሲያበራ ኧኸ እዩት ሲያበራ /፪/ የመስቀል በዓል ደመራ' },
                { timestamp: 60, text: 'ኧኸ እዩት ሲያበራ' },
                { timestamp: 65, text: 'እዩት/፪/ ሲያምር ኧኸ እዩት ሲያምር/፪/ መስቀል በዓለም ሲከብር' },
                { timestamp: 70, text: 'ኧኸ እዩት ሲያምር' },
                { timestamp: 75, text: 'አለን/፪/ እምነት ኧኸ አለን እምነት/፪/ ተዋሕዶ ንጽሕት ኧኸ አለን እምነት' }
              ],
            },
            {
              id: 232,
              title: 'ኀበ ቀራንዮ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/meskel.jpg'),
              audio_url: require('../assets/music/Habe_Keranyo.opus'),
              duration: 350,
              genre: 'ግእዝ 1',
              lyrics: [
                { timestamp: 0, text: 'ኀበ ቀራንዮ ደብረ መድኃኒት/፪/' },
                { timestamp: 5, text: 'ቀራንዮ/፪/' },
                { timestamp: 10, text: 'ኀበ ቀራንዮ' },
                { timestamp: 15, text: 'የመስቀሉ ቃል ለእኛ የእግዚአብሔር ኀይል ነው/፪/' },
                { timestamp: 20, text: 'ለማያምኑት ሞኝነት ነው ለእኛ ግን ሕይወት ነው/፪/' },
                { timestamp: 25, text: 'እንመስክራለን ፈጣያችን አለ' },
                { timestamp: 30, text: 'እንመሰክራለን አማኑኤል አለ' },
                { timestamp: 35, text: 'እንመነው አንካደው ፈጣያችን ቸር ነው/፪/' },
                { timestamp: 40, text: 'እንመሰክራን ድንግል አማላጅ ናት' },
                { timestamp: 45, text: 'አንመሰክራለን ማርያም አማላጅ ናት' },
                { timestamp: 50, text: 'እንመናት አንካዳት የአምላክ እናት ናት/፪/' },
                { timestamp: 55, text: '1ኛቆሮጦስ 1፤18' }
              ],
            },
            {
              id: 233,
              title: 'መስቀል አበባ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/meskel.jpg'),
              audio_url: require('../assets/music/Meskel_Abeba.opus'),
              duration: 250,
              genre: 'ግእዝ 1',
              lyrics: [
                { timestamp: 0, text: 'መስቀል አበባ ነህ ውብ አበባ' },
                { timestamp: 5, text: 'አደይ አበባ ነሽ ውብ አበባ/፪/' },
                { timestamp: 10, text: 'አዝ=====' },
                { timestamp: 15, text: 'መስቀል አበባ ተቀበሮ ሲኖር' },
                { timestamp: 20, text: 'አደይ አበባ ሥነ ስቅለቱ' },
                { timestamp: 25, text: 'መስቀል አበባ እሌኒ አገኘች' },
                { timestamp: 30, text: 'አደይ አበባ ደገኛይቱ' },
                { timestamp: 35, text: 'አዝ=====' },
                { timestamp: 40, text: 'መስቀል አበባ ጥራጊ ሞልተው' },
                { timestamp: 45, text: 'አደይ አበባ አይሁድ በክፋት' },
                { timestamp: 50, text: 'መስቀል አበባ ጢሱ ሰገደ' },
                { timestamp: 55, text: 'አደይ አበባ መስቀል ካለበት' },
                { timestamp: 60, text: 'አዝ====' },
                { timestamp: 65, text: 'መስቀል አበባ ወንዙ ጅረቱ' },
                { timestamp: 70, text: 'አደይ አበባ ሸለቆ ዱሩ' },
                { timestamp: 75, text: 'መስቀል አበባ አሸብርቀው ደምቀው' },
                { timestamp: 80, text: 'አደይ አበባ ላንተ መሰከሩ' }
              ],
            },
            {
              id: 234,
              title: 'አየኸው ደመራ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/meskel.jpg'),
              audio_url: require('../assets/music/Ayehew_Demera.opus'),
              duration: 240,
              genre: 'ግእዝ 1',
              lyrics: [
                { timestamp: 0, text: 'አየኸው(ሽው) ደመራ መስቀል ሲያበራ/፪/' },
                { timestamp: 5, text: 'መስቀል አለ ወይ ቆሟል ወይ' },
                { timestamp: 10, text: 'አለ እንጂ ለምጽ ያነጻል እንጂ' },
                { timestamp: 15, text: 'ያው ቆሟል ድውይ ይፈውሳል' },
                { timestamp: 20, text: 'አምነዋለሁ የት አገኘዋለሁ' },
                { timestamp: 25, text: 'አለልህ(ሽ) እሰረው(ሪው) ባንገትህ(ሽ)' },
                { timestamp: 30, text: 'ከልብህ(ሽ) ተሳለመው(ሚው) አምነህ(ሽ)' },
                { timestamp: 35, text: 'እኮራለው በዕጸ መስቀሉ' },
                { timestamp: 40, text: 'ይፈውሳል ሙታንን ያስነሳል' },
                { timestamp: 45, text: 'ድል ያደርጋል ሰይጣንን ይመታል/፪/' }
              ],
            },
            {
              id: 235,
              title: 'ብርሃን ወጣ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/meskel.jpg'),
              // audio_url: 'TODO: add local file for song id 235',
              duration: 380,
              genre: 'ግእዝ 1',
              lyrics: [
                { timestamp: 0, text: 'ብርሃን ወጣ ከመስቀሉ የሚያንጸባርቅ' },
                { timestamp: 5, text: 'የአምላክ እና የሰው ልጆች እውነተኛ እርቅ' },
                { timestamp: 10, text: 'ደስ ይበለን በትንሣኤው ብርሃን' },
                { timestamp: 15, text: 'እልል እንበል በአንድነት ሆነን' },
                { timestamp: 20, text: 'ተነሣልን መድኃኒታችን' },
                { timestamp: 25, text: 'አዝ======' },
                { timestamp: 30, text: 'ከፊት ለፊት በመሣሉ የመስቀሉ ነገር' },
                { timestamp: 35, text: 'የሚወደው ሐዋርያ የወንጌል መምህር' },
                { timestamp: 40, text: 'ዮሐንስም ስቅለቱን በማየቱ' },
                { timestamp: 45, text: 'ሲያዝን ኖረ በምድራዊ ሕይወቱ' },
                { timestamp: 50, text: 'ቢያሠቅቀው ሞቱ ግርፋቱ' },
                { timestamp: 55, text: 'አዝ=======' },
                { timestamp: 60, text: 'ሞኝነት ነው ለሚጠፉት መሠናከያቸው' },
                { timestamp: 65, text: 'በዓለም ጥበብ ለሚኖሩት እውነት ተሰውሮባቸው' },
                { timestamp: 70, text: 'ለጠቢብ ሰው በመንፈስ ለሚኖረው' },
                { timestamp: 75, text: 'እውነተኛ የመዳን ቀን አርማ ነው' },
                { timestamp: 80, text: 'አዝ====' },
                { timestamp: 85, text: 'እስከ ሞት ላልተለየው ቅዱስ ሐዋርያ' },
                { timestamp: 90, text: 'ለዮሐንስ የወንጌል ሰው የጽድቅ ባለሞያ' },
                { timestamp: 95, text: 'ምስጋናችን በምድር ይድረሰው' },
                { timestamp: 100, text: 'እንላለን በሰጠው ምሳሌው' },
                { timestamp: 105, text: 'ሰዎች ሁሉ እንከተለው' }
              ],
            },
            // ↓ keep adding songs here (id: 301, 302, 303...)
          ],
        },
        {
          id: 'yemeskel_sub_3',
          name: 'ግእዝ 2',
          image: require('../assets/images/meskel.jpg'), 
          songs: [
            {
              id: 236,
              title: 'ልዑል እግዚአብሔር',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/meskel.jpg'),
              audio_url: require('../assets/music/Leul_Egziaber_Meskel.opus'),
              duration: 150,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'ልዑል እግዚአብሔር /፪/ ምስጋና ይገባሃል /፪/' },
                { timestamp: 5, text: 'ለመስቀል በዓል /፪/ በሰላም በጤና አደረስከን /፪/' }
              ],
            },
            {
              id: 237,
              title: 'ሐነጽዋ ለቤተክርስቲያን',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/meskel.jpg'),
              audio_url: require('../assets/music/Haneswa.opus'),
              duration: 210,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'ሐነፅዋ ለቤተክርስቲያን ወሣረርዋ በመንፈስ ቅዱስ/፪/' },
                { timestamp: 5, text: 'እንተ ተሐንፀት በእደ ካህናት ወተቀደሰት በአፈ ጳጳሳት' },
                { timestamp: 10, text: 'ወተጠምቀት በማይ ዘውኅዘ እምገቦ አመሕማማቲሁ/፪/' },
                { timestamp: 15, text: 'ትርጉም=> ቤተ ክርስቲያን በመንፈስ ቅዱስ ተሠራች በካህናት እጅ የታነፀችውን' },
                { timestamp: 20, text: 'በጳጳሳት አፍ የተቀደሰችውን' },
                { timestamp: 25, text: 'በመድኃኔዓለም በሕማሙ ጊዜ ከጎኑ በፈሰሰ ውሃ የተጠመቀችውን' }
              ],
            }
            // ↓ keep adding songs here (id: 301, 302, 303...)
          ],
        },
        {
          id: 'yemeskel_sub_4',
          name: 'ግእዝ 3',
          image: require('../assets/images/meskel.jpg'), 
          songs: [
            {
              id: 238,
              title: 'እሌኒ ንግሥት',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/meskel.jpg'),
              audio_url: require('../assets/music/Eleni_Nigiste.opus'),
              duration: 160,
              genre: 'ግእዝ 3',
              lyrics: [
                { timestamp: 0, text: 'እሌኒ ንግሥት ሐሠሠት መስቀሉ/፪/' },
                { timestamp: 5, text: 'እንባቆም ነቢይ ዘአንከረ ግብሮ/፪/' },
                { timestamp: 10, text: 'ትርጉም ፡- ነቢይ እንባቆም ተአምራቱን ያደነቀውን' },
                { timestamp: 15, text: 'መስቀል ንግሥት ዕሌኒ ፈለገችው፡፡' }
              ],
            }
            // ↓ keep adding songs here (id: 301, 302, 303...)
          ],
        },
  
      ],
    },

    // ═══════════════════════════════════════════════════════
    // CATEGORY 4
    // ═══════════════════════════════════════════════════════
    {
      id: 'yearsema_mezmurat',
      name: 'የቅድስት አርሴማ መዝሙራት',
      icon: require('../icons/playlist.png'),
      color: '#45B7D1',
      image: require('../assets/images/arsema.jpg'), 
      subcategories: [
        {
          id: 'yearsema_sub_1',
          name: 'እዝል ዓራራይ ቅኝት',
          image: require('../assets/images/arsema.jpg'), 
          songs: [
            {
              id: 240,
              title: 'ሰላም ለኪ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/arsema.jpg'),
              audio_url: require('../assets/music/Selam_Leki_Arsema.opus'),
              duration: 120,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ሰላም ለኪ(2)' },
                { timestamp: 10, text: 'ሰማዕቷ ሰላም ለኪ(2)' }
              ],
            },
            {
              id: 241,
              title: 'አርሴማ ቅድስት (ወሰማዕት)',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/arsema.jpg'),
              audio_url: require('../assets/music/Arsema_Kidist_Wesemat.opus'),
              duration: 140,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'አርሴማ ቅድስት (2)ወሰማዕት (2)' },
                { timestamp: 10, text: 'ወሰማዕት (4)ሰማዕት አርሴማ ቅድስት(2)' },
                { timestamp: 20, text: 'ትርጉም ቅድስት አርሴማ ሰማዕት ምስክር ናት' }
              ],
            },
            {
              id: 242,
              title: 'አርሴማ ቅድስት',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/arsema.jpg'),
              audio_url: require('../assets/music/Arsema_Kidist.opus'),
              duration: 135,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'አርሴማ ቅድስት (3)' },
                { timestamp: 10, text: 'ሰማዕት (3) አርሴማ ቅድስት (2)' },
                { timestamp: 20, text: 'ትርጉም ቅድስት አርሴማ ሰማዕት ምስክር ናት' }
              ],
            },
            {
              id: 243,
              title: 'ጊዜ እረፍታ ለአርሴማ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/arsema.jpg'),
              audio_url: require('../assets/music/Gize_Erefta.opus'),
              duration: 150,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ጊዜ እረፍታ ለአርሴማ (2)' },
                { timestamp: 10, text: 'እምልዕልና ወረደ እግዚአብሔር (2)' },
                { timestamp: 20, text: 'ትርጉም ሰማዕቷ ቅድስት አርሴማ ባረፈች ጊዜ እግዚአብሔር ነፍሷን ለመቀበል ከልዕልና ወረደ' }
              ],
            },
            {
              id: 244,
              title: 'ርዕዩ እበያ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/arsema.jpg'),
              audio_url: require('../assets/music/Riyu_Ebeya.opus'),
              duration: 180,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ርዕዩ ዕበያ ለቅድስት አርሴማ (2)' },
                { timestamp: 10, text: 'ዕውራን ይሬእዩ ወጽሙማን ይሰምዑ እለ ለምጽ ይነጽሑ እለ መጽኡ ኅቤሃ (2)' },
                { timestamp: 20, text: 'ኑ እዩ የአርሴማን ተአምራት (2)' },
                { timestamp: 30, text: 'እውራን ያያሉ የማይሰሙት ይሰማሉ ለምጻሞችም ይነጻሉ ወደእርስዋ የመጡ ሁሉ(2)' }
              ],
            },
            {
              id: 245,
              title: 'አርሴማ አማልጅን',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/arsema.jpg'),
              audio_url: require('../assets/music/Arsema_Amaljin.opus'),
              duration: 145,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'አርሴማ አማልጅን ከአምላካችን (2)' },
                { timestamp: 10, text: 'እንዳንጠፋ እንዳንሞት በነፍሳችን አደራሽን ቁሚልን ከጎናችን(2)' }
              ],
            },
            {
              id: 246,
              title: 'ጽኑ ሰማዕት',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/arsema.jpg'),
              audio_url: require('../assets/music/Sinu_Semayt.opus'),
              duration: 350,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ጽኑ ሰማዕት የእምነት አርበኛ አርሴማ ነይ ነይ ወደ እኛ/፪/' },
                { timestamp: 15, text: 'ነይ ነይ ቴዎድሮስ አትናስያ ነይ ነይ በስለት ያገኙሽ' },
                { timestamp: 25, text: 'ነይ ነይ ብሉይን ከሐዲስ ነይ ነይ ጠንቅቀሽ የተማርሽ' },
                { timestamp: 35, text: 'ነይ ነይ በፍጹም ትሕትና ነይ ነይ በጸሎት የተጋሽ' },
                { timestamp: 45, text: 'ነይ ነይ አርሴማ ልዩ ነሽ ነይ ነይ አምላክ የመረጠሽ' },
                { timestamp: 55, text: 'ነይ ነይ ውበትም ሐሰት ነው ነይ ነይ ደም ግባትም ከንቱ' },
                { timestamp: 65, text: 'ነይ ነይ ንብረት ትዳር ሁሉ ነይ ነይ ኃላፊ ውእቱ' },
                { timestamp: 75, text: 'ነይ ነይ ንግሥትን መባልን ነይ ነይ በፍጹም ሳትሻ' },
                { timestamp: 85, text: 'ነይ ነይ ዓለምን በመናቅ ነይ ነይ ገባች ወደ ዋሻ' },
                { timestamp: 95, text: 'ነይ ነይ አረመኔው ድርጣድስ ነይ ነይ ቢያሰቃይሽ' },
                { timestamp: 105, text: 'ነይ ነይ ሕይወቴ ክርስቶስ ነው ብለሽ ሰበክሽ' },
                { timestamp: 115, text: 'ነይ ነይ አንገትሽን ለሰይፍ ነይ ነይ አሳልፈሽ ሰጠሽ' },
                { timestamp: 125, text: 'ነይ ነይ ክብርሽም ተገልጾ ነይ ነይ ለዓለም አበራሽ' },
                { timestamp: 135, text: 'ነይ ነይ አርአያ ልትሆኚን ለኛ ለሁላችን' },
                { timestamp: 145, text: 'ነይ ነይ ፈጽመሽ አሳየሽ ነይ ነይ ታላቅ ተጋድሎሽን' },
                { timestamp: 155, text: 'ነይ ነይ ዓለምን ድል መንሳት አቅቶናልና' },
                { timestamp: 165, text: 'ነይ ነይ አርሴማ አትለይን ነይ ነይ በእምነት እንድንፀና' }
              ],
            }
          
          ],
        },
        {
          id: 'yearsema_sub_2',
          name: 'ግእዝ 2',
          image: require('../assets/images/arsema.jpg'), 
          songs: [
            {
              id: 247,
              title: 'ጸበለ ቤትኪ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/arsema.jpg'),
              audio_url: require('../assets/music/Tsebele_Betki.opus'),
              duration: 160,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'ጸበለ ቤትኪ ፈወሰኒ(2)' },
                { timestamp: 10, text: 'ጸበለ ቤትኪ(4) ፈወሰኒ አርሴማ ቅድስት(2)' },
                { timestamp: 20, text: 'የአርሴማ ጸበል ፈወሰኝ(2)' },
                { timestamp: 30, text: 'የአርሴማ ጸበል (4) ፈወሰኝ የአርሴማ ጸበል(2)' }
              ],
            }
          
          ],
        },
      ],
    },
    // ═══════════════════════════════════════════════════════
    // CATEGORY 8
    // ═══════════════════════════════════════════════════════
    {
      id: 'yelidet_mezmurat',
      name: 'የልደት መዝሙራት',
      icon: require('../icons/playlist.png'),
      color: '#45B7D1',
      image: require('../assets/images/lidet.jpg'), 
      subcategories: [
        {
          id: 'yelidet_mezmurat_yearsema_sub_1',
          name: 'እዝል ዓራራይ ቅኝት',
          image: require('../assets/images/lidet.jpg'), 
          songs: [
            {
                id: 248,
                title: 'ተወልደ ኢየሱስ',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/lidet.jpg'),
                audio_url: require('../assets/music/Tewelde_Eyesus.opus'),
                duration: 140,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'ተወልደ ኢየሱስ በቤተልሔም (2) ዘይሁዳ በቤተልሔም(2)' },
                  { timestamp: 10, text: 'አዋልደ ጢሮስ አሜሃ ይሰግዳ አሜሃ ይሰግዳ(2) በቤተልሔም(2)' },
                  { timestamp: 20, text: 'ትርጉም ኢየሱስ በይሁዳ በቤተልሔም ተወለደ የጢሮስ ልጆች ያን ጊዜ ይሰግዱለታል' }
                ],
              },
              {
                id: 249,
                title: 'ዮም ሰማያዊ',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/lidet.jpg'),
                audio_url: require('../assets/music/Yom_Semayawi.opus'),
                duration: 130,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'ዮም ሰማያዊ በጎል ሰከበ ለዘተወልደ እምቅድስት ድንግል(2)' },
                  { timestamp: 10, text: 'ርእይዎ ኖሎት (2) አእኩትዎ መላእክት(2)' },
                  { timestamp: 20, text: 'ትርጉም ዛሬ ከቅድስት ድንግል ማርያም የተወለደውን እረኞች አዩት መላእክት አመሰገኑት' }
                ],
              },
              {
                id: 250,
                title: 'ቤዛ ኩሉ ዓለም',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/lidet.jpg'),
                audio_url: require('../assets/music/Bezakulu.opus'),
                duration: 150,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'ቤዛ ኩሉ ዓለም ዮም ተወልደ (2) ቤዛ ኩሉ ዓለም ዮም ተወልደ (2)' },
                  { timestamp: 10, text: 'የዓለም ሁሉ መድኃኒት ዛሬ ተወለደ(2)የዓለም ሁሉ መድኃኒት ዛሬ ተወለደ(2)' }
                ],
              },
              {
                id: 251,
                title: 'መጽአ ከመ ይቤዙ',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/lidet.jpg'),
                audio_url: require('../assets/music/Mesa_Kemeyibezo_Alem.opus'),
                duration: 120,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'መጽአ ከመ ይቤዙ ዓለም(2) የሀበነ ሰላም ጋዳ ያበውኡ ቁርባነ(2)' },
                  { timestamp: 15, text: 'ትርጉም ዓለምን ለማዳን መጣ አንድነት ይሰጠን ዘንድ እጅ መንሻም ቁርባንን ያቀርባሉ' }
                ],
              },
              {
                id: 252,
                title: 'ስብሐት ለእግዚአብሔር',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/lidet.jpg'),
                audio_url: require('../assets/music/Sibhat_Leegizaber.opus'),
                duration: 160,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'ስብሐት ለእግዚአብሔር በሰማያት(2) ወሰላም በምድር ስምረቱ ለሰብእ' },
                  { timestamp: 10, text: 'ሃሌሉያ (3) አሜን ሃሌሉያ(2)' },
                  { timestamp: 20, text: 'ትርጉም ለእግዚአብሔር በሰማያት ምስጋና ይገባዋል በምድርም እርቅ ተጀመረ ለሰው ነጻነቱ ተሰጠው' }
                ],
              },
              {
                id: 253,
                title: 'በቤተልሔም ተወልደ',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/lidet.jpg'),
                audio_url: require('../assets/music/Bebetelhem_Tewelde.opus'),
                duration: 125,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'በቤተልሔም ተወልደ(2) አማኑኤል(2)' },
                  { timestamp: 10, text: 'እምዘርዐ ዳዊት(4) ተወልደ አማኑኤል(2)' },
                  { timestamp: 20, text: 'ትርጉም በቤተልሔም የተወለደው አማኑኤል ከዳዊት ዘር ነው' }
                ],
              },
              {
                id: 254,
                title: 'በኮከብ መጽኡ',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/lidet.jpg'),
                audio_url: require('../assets/music/Bekokeb_Mesu.opus'),
                duration: 140,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'በኮከብ መጽኡ(2) ሰብአ ሰገል (2) ለአማኑኤል(4) ይስግዱ ሰብአ ሰገል(2)' },
                  { timestamp: 15, text: 'በኮከብ መጡ(2) ሰብአ ሰገል(2) ለአማኑኤል(4) ሊሰግዱ ሰብአ ሰገል(2)' },
                  { timestamp: 30, text: 'ትርጉም የጥበብ ሰዎች በኮከብ እየተመሩ ለአማኑኤል ይሰግዱ ዘንድ መጡ' }
                ],
              },
              {
                id: 255,
                title: 'በጎል ሰከበ',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/lidet.jpg'),
                audio_url: require('../assets/music/Begol_Sekebe.opus'),
                duration: 145,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'በጎል ሰከበ በአጽርቅት ተጠብለለ(2) ቤዛ ኩሉ ዓለም (2) ዮም ተወልደ(2)' },
                  { timestamp: 15, text: 'በበረት ተኛ በጨርቅም ተጠቀለለ(2) የዓለም መድኃኒት(2) ዛሬ ተወለደ(2)' }
                ],
              },
              {
                id: 256,
                title: 'አምኃሆሙ አምጽኡ',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/lidet.jpg'),
                audio_url: require('../assets/music/Amhawomu.opus'),
                duration: 110,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'አምኃሆሙ አምጽኡ መድምመ(2) አንፈርአፁ ሰብአ ሰገል(2)' },
                  { timestamp: 10, text: 'ትርጉም ሰብአ ሰገል በደስታ ዘለሉ የሚያስደንቅ እጅ መንሻ አመጡለት' }
                ],
              },
              {
                id: 257,
                title: 'በጎለ እንስሳ',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/lidet.jpg'),
                audio_url: require('../assets/music/Begole_Ensisa.opus'),
                duration: 105,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'በጎለ እንስሳ(2) በጎለ እንስሳ ተወልደ አማኑኤል(2)' },
                  { timestamp: 10, text: 'ትርጉም በእንስሳት በረት አማኑኤል ተወለደ' }
                ],
              },
              {
                id: 258,
                title: 'እምሰማያት ወረደ',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/lidet.jpg'),
                audio_url: require('../assets/music/Emsemayat_Werede.opus'),
                duration: 180,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'እምሰማያት ወረደ ወእማርያም ተወልደ(2) ከመ ይኩን ቤዛ(2) ለኩሉ ዓለም ለብሰ ሥጋ ማርያም (2)' },
                  { timestamp: 15, text: 'ከሰማያት ወረደ ከድንግል ማርያም ተወለደ(2) እንዲሆነን ቤዛ(2) ለዓለም ሁሉ ለበሰ የማርያምን ሥጋ(2)' }
                ],
              },
              {
                id: 259,
                title: 'ቀዳሚሁ ቃል',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/lidet.jpg'),
                audio_url: require('../assets/music/Kedamihu_Kal.opus'),
                duration: 120,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'ቀዳሚሁ ቃል ውእቱ ቃል(2) ይቤ ዮሐንስ ቃል ሥጋ ኮነ ይቤ ዮሐንስ(2)' }
                ],
              },
              {
                id: 260,
                title: 'ዝንቱ ኩሉ ኮነ',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/lidet.jpg'),
                audio_url: require('../assets/music/Zintu_Kulu.opus'),
                duration: 115,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'ዝንቱ ኩሉ ኮነ በሰማይ በምድር (2) በፈቃደ(4) እግዚአብሔር(2)' }
                ],
              },
              {
                id: 261,
                title: 'እንደ ዮሴፍ',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/lidet.jpg'),
                audio_url: require('../assets/music/Ende_Yoseph.opus'),
                duration: 140,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'እንደ ዮሴፍ ወይ እንደ ሰሎሜ በሆን(2) ኢየሩሳሌም(3) በሆን አምላክ ሲወለድ ባየን(2)' }
                ],
              },
              {
                id: 262,
                title: 'የምሥራች ደስ ይበለን',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/lidet.jpg'),
                audio_url: require('../assets/music/Yemsrach_Des_Yibelen.opus'),
                duration: 260,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'የምሥራች ደስ ይበለን የዓለም መድኃኒት ተወለደልን(2)' },
                  { timestamp: 15, text: 'ጌታችን ተወልዶ አይተነው መጣን(2)' },
                  { timestamp: 30, text: 'ንጉሥ ሄሮድስ ይህን ሲሰማ ፈልጋችሁ አምጡት በቀን በጨለማ(2)' },
                  { timestamp: 45, text: 'ሰብአ ሰገል እንደታዘዙት በኮከብ ተመርተው ሕጻኑን አገኙት(2)' },
                  { timestamp: 60, text: 'ሰገዱለት ከመሬት ወድቀው ወርቅና ዕጣኑን ከርቤውን ሰጥተው(2)' }
                ],
              },
              {
                id: 263,
                title: 'እሰይ እሰይ ተወለደ',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/lidet.jpg'),
                audio_url: require('../assets/music/Esey_Esey_Tewelde.opus'),
                duration: 280,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'እሰይ እሰይ ተወለደ (2) ከሰማየ ሰማያት ወረደ ከድንግል ማርያም ተወለደ(2)' },
                  { timestamp: 15, text: 'እሱ ባይወለድ እሰይ እሰይ ቸሩ አባታችን እሰይ እሰይ(2) መች ትገኝ ነበረ እሰይ እሰይ ገነት ርስታችን እሰይ እሰይ' },
                  { timestamp: 30, text: 'ብርሃን ወጣላቸው እሰይ እሰይ ለእምነት ወገኖቹ እሰይ እሰይ በጨለማ ጉዞ እሰይ እሰይ እንዲያ ሲሰለቹ እሰይ እሰይ' },
                  { timestamp: 45, text: 'እንደ ጠል ወረደ እሰይ እሰይ ከሰማይ ወደ እኛ እሰይ እሰይ ወገኖቹን ሊያድን እሰይ እሰይ ከኃጢአት ቁራኛ እሰይ እሰይ' },
                  { timestamp: 60, text: 'እግዚአብሔር አብ ላከ እሰይ እሰይ አንድያ ልጁን እሰይ እሰይ እርሱ ወዷልና እሰይ እሰይ እንዲሁ ዓለሙን እሰይ እሰይ' }
                ],
              },
              {
                id: 264,
                title: 'አንቺ አንቺ ቤተልሔም',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/lidet.jpg'),
                audio_url: require('../assets/music/Anchi_Anchi_Betelhem.opus'),
                duration: 240,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'አንቺ አንቺ ቤተልሔም የይሁዳ መሬት በአንቺ ተወለደ የዓለም መድኃኒት(2)' },
                  { timestamp: 15, text: 'ለአዳም ክብር ሲሻ ቤተልሔም ለሁሉም ሰላም ቤተልሔም' },
                  { timestamp: 30, text: 'ዛሬ ተወለደ ቤተልሔም ከድንግል ማርያም ቤተልሔም' },
                  { timestamp: 45, text: 'እጅ መንሻ አቀረቡ ቤተልሔም የምሥራቅ ነገሥታት ቤተልሔም' },
                  { timestamp: 60, text: 'በከብቶች በረት ቤተልሔም ተኝቶ ላገኙት ቤተልሔም' },
                  { timestamp: 75, text: 'እሥራኤል ሕዝቤን ቤተልሔም የሚጠብቃቸው ቤተልሔም' },
                  { timestamp: 90, text: 'ካንቺ ይወጣል ብሎ ቤተልሔም እንደ ነገራቸው ቤተልሔም' }
                ],
              },
              {
                id: 265,
                title: 'ሰብአ ሰገል መጡ',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/lidet.jpg'),
                audio_url: require('../assets/music/seba_segel_metu.opus'),
                duration: 260,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'ሰብአ ሰገል መጡ ይዘው እጅ መንሻ(3) ዕጣን ወርቅ ከርቤ ለጌታ እጅ መንሻ(3)' },
                  { timestamp: 20, text: 'ይኸው ተወለደ የዓለም መድኃኒት(3) ይኸው ተጠመቀ የዓለም መድኃኒት(3)' },
                  { timestamp: 40, text: 'ይኸው ተወለደ የዓለም መድኃኒት(3) ለእኛ ለሕይወት ሲሆን ለሰይጣን መጥፋት(3)' },
                  { timestamp: 60, text: 'ትንቢት ተናገሩ ነቢያት በሙሉ (3) አምላክ ቀዳማዊ ይወለዳል ሲሉ(3)' },
                  { timestamp: 80, text: 'በሶሪያ ታየ ፈጣሪ እንደ እንግዳ (2) ሥራዓተ ጥምቀቱን ለሕዝቡ ሊያስረዳ(2)' }
                ],
              },
              {
                id: 266,
                title: 'በጎል በጎል',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/lidet.jpg'),
                audio_url: require('../assets/music/Begol_Begol.opus'),
                duration: 480,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'በጎል በጎል ሰብአ ሰገል በጎል ሰብአ ሰገል(2) በጎል ሰብአ ሰገል ሰገዱ ሎቱ(4)' },
                  { timestamp: 20, text: 'አማን አማን አማን በአማን አማን አማን በአማን(2) በዓለም ተሰበከ የጌታችን ቃል (4)' },
                  { timestamp: 40, text: 'ፀሐይ ፀሐይ ፀሐይ ሠረቀ ፀሐይ ፀሐይ ሠረቀ(2) ፀሐይ ሠረቀ ክርስቶስ ተወልደ ፀሐይ ሠረቀ ክርስቶስ ተጠምቀ' },
                  { timestamp: 60, text: 'አንቺ ዮርዳኖስ ምንኛ ታደልሽ ዮርዳኖስ ምንኛ ታደልሽ(2) የእግዚአብሔር መንፈስ ከላይ ወርዶብሽ የዓለም መድኃኒት ተጠመቀብሽ(2)' },
                  { timestamp: 80, text: 'ድንግል ማርያም ንጽሕት ቅድስት ማርያም ንጽሕት ቅድስት(2)' },
                  { timestamp: 100, text: 'የጌታችን እናት ምስጋና ይገባሻል ከሴቶቹ ሁሉ አንቺ ተመርጠሻል(2)' },
                  { timestamp: 120, text: 'እልል እልል ደስ ይበለን እልል ደስ ይበለን(2) ወልድ ተወልዶ ነፃ አወጣን ዮሐንስ ሲያጠምቀው ድልን አገኘን(2)' },
                  { timestamp: 140, text: 'አዳምን ሊጠራ የመጣ ሙሽራ ሊጠራ የመጣ ሙሽራ(2) በገሊላ መንደር ለሠርግ ተጠራ(2)' },
                  { timestamp: 160, text: 'ሠርግ ቤት እንዳለ በክብር ተቀምጦ በክብር በክብር ተቀምጦ(2) የወይን ጠጅ ሆነ ውኃው ተለውጦ(2)' },
                  { timestamp: 180, text: 'ወለደን በጥምቀት በመንፈስ ዳግመኛ በጥምቀት በመንፈስ ዳግመኛ(2) የንጉሦች ንጉሥ የጻድቃን እረኛ(2)' },
                  { timestamp: 200, text: 'ድንግል ማርያም ያስገኘሽው ፍሬ ማርያም ያስገኘሽው ፍሬ(2) ሕዝቦቹን ለማዳን ተጠመቀ ዛሬ(2)' },
                  { timestamp: 220, text: 'አዲሱ ሙሽራ ሲመጣ እያያችሁ ሙሽራ ሲመጣ እያያችሁ(2)' },
                  { timestamp: 240, text: 'የዮርዳኖስ ውሆች ስለምን ሸሻችሁ(2)' },
                  { timestamp: 260, text: 'እናንተ ተራሮች እግር ሳይኖራችሁ ተራሮች እግር ሳይኖራችሁ(2) እንዴት እንደ ጊደር ሽቅብ ዘለላችሁ(2)' }
                ],
              },
              {
                id: 267,
                title: 'አሁን ተገለጸ',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/lidet.jpg'),
                audio_url: require('../assets/music/Ahun_Tegelese.opus'),
                duration: 220,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'አሁን ተገለጸ የማርያም ልዕልና በእርሷ ላይ አደረ ሰማያዊ መና (2)' },
                  { timestamp: 20, text: 'አሁን ስለታየ ያልታየ ምሥጢር እጅግ ደስ አላቸው ሰማይና ምድር(2)' },
                  { timestamp: 40, text: 'ከሰማይ ወደ ምድር አብ ቢመለከት ምንም አላገኘ እንዳንቺ ንጽሕይት (2)' },
                  { timestamp: 60, text: 'የኪሩቤል ግርማ አካላዊ ቃል ባንቺ ላይ አደረ ማርያም ድንግል(2)' },
                  { timestamp: 80, text: 'መላእክት በሰማይ እህታችን ይሉሻል በንጽሕ በድንጋሌ ከነርሱ በልጠሻል(2)' }
                ],
              },
              {
                id: 268,
                title: 'ሶበ ሰማዕነ',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/lidet.jpg'),
                audio_url: require('../assets/music/Sobe_Semayne_Yelidet.opus'),
                duration: 320,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'ሶበ ሰማዕነ ዜናከ መጻእነ ኀቤከ (2) መጽአነ(4)' },
                  { timestamp: 20, text: 'አንቺ ቤተልሔም የዳዊት ከተማ የምሥራች ቃሉ በአንቺ ቤት ተሰማ' },
                  { timestamp: 40, text: 'ወልድም ተሰጠን ሕጻን ተወለደ አስጨናቂው ዘመን በእርሱ ተወገደ' },
                  { timestamp: 60, text: 'ሰውና መላእክት በአንድ ላይ ዘመሩ የእግዚአብሔርን ክብር ለዓለም መሰከሩ' },
                  { timestamp: 80, text: 'ምስጋና በሰማይ ለእግዚአብሔር ይሁን ሰላም ለሰው ልጆች በምድር ላይ ይስፈን' },
                  { timestamp: 100, text: 'እናትና ልጅ ፀሐይ ሳይነካቸው የእግዚአብሔር መልአክ ከፊታቸው ወድቀው' },
                  { timestamp: 120, text: 'በከብቶች በረት አምላክ ተወለደ የነገሥታት ንጉሥ ሞትን አስወገደ' },
                  { timestamp: 140, text: 'ድንቅ መካር ኃያል የሰላም አለቃ ጌታ ሆይ በስምህ ግዛቱ አበቃ' },
                  { timestamp: 160, text: 'ሰላምን የሚሰጥ አልፋና ኦሜጋ የእስራኤል ንጉሥ ተገልጾአል በሥጋ' }
                ],
              },
              {
                id: 269,
                title: 'የምሥራች ደስ ይበለን (ክፍል 2)',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/lidet.jpg'),
                audio_url: require('../assets/music/Yemsrach_Des_Yibelen.opus'),
                duration: 250,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'የምሥራች ደስ ይበለን(2) የዓለም መድኃኒት ተወለደልን ምሥራች ደስ ይበለን(2)' },
                  { timestamp: 20, text: 'ኢየሱስ የዓለም ቤዛ ክርስቶስ የዓለም ቤዛ የዓለም ቤዛ(2) ለእኛ ሆኗል መዳኛ' },
                  { timestamp: 40, text: 'ፍቅር ሳበው ወልድን ከመንበሩ(2) ወገኖቹን ሊያድን ጠራን ወደ ክብሩ(2)' },
                  { timestamp: 60, text: 'አገኘነው በግርግም ተኝቶ(2) ለአዳም የገባውን ቃል ኪዳን አስቦ(2)' },
                  { timestamp: 80, text: 'ከድንግል ማርያም ከእመቤታችን(2) ይኸው ተወለደ ጠፋ መርገማችን(2)' },
                  { timestamp: 100, text: 'ነቢያትም ትንቢት ተናገሩ(2) አልቀረም አየነው እንደናፈቅነው (2)' }
                ],
              }
          
          ],
        },
        {
          id: 'yelidet_mezmurat_sub2',
          name: 'ግእዝ 1',
          image: require('../assets/images/lidet.jpg'), 
          songs: [
              {
                id: 270,
                title: 'መድኃኒነ',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/lidet.jpg'),
                audio_url: require('../assets/music/Medanine.opus'),
                duration: 115,
                genre: 'ግእዝ 1',
                lyrics: [
                  { timestamp: 0, text: 'መድኃኒነ ተወልደ ነዋ(2)' },
                  { timestamp: 10, text: 'ይእዜኒ ለሰላም ንትልዋ(2)' },
                  { timestamp: 20, text: 'ትርጉም መድኃኒታችን ኢየሱስ ክርስቶስ እነሆ ተወለደ አሁንም ሰላምን እንከተላት' }
                ],
              },
              {
                id: 271,
                title: 'ኢየሱስ መጽአ',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/lidet.jpg'),
                // audio_url: 'TODO: add local file for song id 271',
                duration: 110,
                genre: 'ግእዝ 1',
                lyrics: [
                  { timestamp: 0, text: 'ኢየሱስ መጽአ ውስተ ዓለም(2)' },
                  { timestamp: 10, text: 'በብርሃኑ ንዑ ናንሶሱ(2)' },
                  { timestamp: 20, text: 'ትርጉም ኢየሱስ ክርስቶስ ወደ ዓለም መጣ ኑ በብርሃኑ እንመላለስ' }
                ],
              },
              {
                id: 272,
                title: 'አማን በአማን',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/lidet.jpg'),
                audio_url: require('../assets/music/Aman_beaman_menkere_yeldet_edited.opus'),
                duration: 105,
                genre: 'ግእዝ 1',
                lyrics: [
                  { timestamp: 0, text: 'አማን በአማን(2) መንክር(2)' },
                  { timestamp: 10, text: 'መንክር ስብሐተ ልደቱ(2)' },
                  { timestamp: 20, text: 'ትርጉም እውነት በእውነት የጌታ ልደቱ ምስጋና ድንቅ ነው' }
                ],
              },
              {
                id: 273,
                title: 'ወወለደት',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/lidet.jpg'),
                audio_url: require('../assets/music/Weweldet.opus'),
                duration: 120,
                genre: 'ግእዝ 1',
                lyrics: [
                  { timestamp: 0, text: 'ወወለደት ወልደ ዘበኩራ (2)' },
                  { timestamp: 10, text: 'መንጦላዕተ ደመና ሰወራ(2)' },
                  { timestamp: 20, text: 'ትርጉም የበኩር ልጇዋን የወለደች የደመና መጋረጃ ጋረዳት' }
                ],
              }
          
          ],
        },
        {
          id: 'yelidet_mezmurat_sub3',
          name: 'ግእዝ 2',
          image: require('../assets/images/lidet.jpg'), 
          songs: [
            {
              id: 274,
              title: 'ለዘተወልደ እም ቅድስት',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/lidet.jpg'),
              audio_url: require('../assets/music/Lezetewelde.opus'),
              duration: 150,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'ለዘተወልደ እም ቅድስት ድንግል ምንተ ንብሎ ናስተማስሎ ለመድኃኒነ(2)' },
                { timestamp: 20, text: 'አርዌ ገዳምኑ አንበሳ ወሚመ(2)ከራድዮን(2)' },
                { timestamp: 40, text: 'ትርጉም፡ ከእመቤታችን የተወለደው ምን ብለን እንጠራዋለን መድኃኒታችን ኢየሱስ ክርስቶስ በምን እንመስለዋለን በዱር አውሬ አንበሳ ነው ወይስ ከራድዮን በሚባል ወፍ' }
              ],
            },
            {
              id: 275,
              title: 'በኮከብ መጽኡ (ክፍል 2)',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/lidet.jpg'),
              audio_url: require('../assets/music/Bekokeb_metsu_yesgedu_edited.opus'),
              duration: 130,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'በኮከብ መጽኡ ሰብአ ሰገል(2) ይስግዱ ለአማኑኤል ይስግዱ(2)' },
                { timestamp: 15, text: 'በኮከብ መጡ ሰብአ ሰገል(2) ሊሰግዱ ለአማኑኤል ሊሰግዱ (2)' }
              ],
            },
            {
              id: 276,
              title: 'እስመ እም ዘርዐ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/lidet.jpg'),
              audio_url: require('../assets/music/Esme_Emzdra_Dawit.opus'),
              duration: 120,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'እስመ እም ዘርዐ ዳዊት ዘመጽአ (2) በቤተልሔም ዘይሁዳ በቤተልሔም ዘይሁዳ(2)' },
                { timestamp: 20, text: 'ትርጉም፡ ከዳዊት ዘር የመጣው የይሁዳ ክፍል በምትሆን በቤተልሔም ተወለደ' }
              ],
            },
            {
              id: 277,
              title: 'የምሥራች ተወለደ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/lidet.jpg'),
              audio_url: require('../assets/music/Yemsrach_Tewelde_Eseyesey.opus'),
              duration: 140,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'የምሥራች ተወለደ እሰይ እሰይ (2)' },
                { timestamp: 10, text: 'አማኑኤል(2) የብርሃናት ጌታ የምሥራቅ ፀሐይ ተወለደ አምላክ አዶናይ(2)' }
              ],
            },
            {
              id: 278,
              title: 'በበረት የተኛው',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/lidet.jpg'),
              audio_url: require('../assets/music/Beberet_Yetegnaw.opus'),
              duration: 200,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'በበረት የተኛው ቅዱሱ ሕጻን ለዓለም ሁሉ ሆነለት መድኅን' },
                { timestamp: 20, text: 'ምስክር ሊሆኑ ለፍጹም መንግሥቱ ትንፋሽ ገበሩለት ከበው እንስሳቱ(2)' },
                { timestamp: 40, text: 'እሰይ የምሥራች ሃሌ ሃሌሉያ ጌታ ተወለደ ከድንግል ማርያም(2)' }
              ],
            },
          
          ],
        },
        {
          id: 'yelidet_mezmurat_sub4',
          name: 'ግእዝ 3',
          image: require('../assets/images/lidet.jpg'), 
          songs: [
            {
              id: 279,
              title: 'ሣር ቅጠሉ ሠርዶው',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/lidet.jpg'),
              audio_url: require('../assets/music/Sarkitelu_Serdo.opus'),
              duration: 220,
              genre: 'ግእዝ 3',
              lyrics: [
                { timestamp: 0, text: 'ሣር ቅጠሉ ሠርዶው ሰንበሌጥ ቀጤማው በዚያች ቀን በዚያች ወር ለምልሞ የነበረው' },
                { timestamp: 15, text: 'በእልልታ ዘመሩ በደስታ ተሞልተው ጌታ መወለዱን የምሥራች ሰምተው' },
                { timestamp: 30, text: 'እልል በይ ቤተልሔም(2) ሃሌ ሃሌሉያ የፍቅር የሰላም ነሽና ገበያ(2)' },
                { timestamp: 50, text: 'ያ ትሁት እረኛ ሳለ በትጋት ብርሃንን ለበሰ በእኩለ ሌሊት' },
                { timestamp: 65, text: 'ጥሪ ተደርጎለት ከሰማይ ሠራዊት ለመመልከት በቃ የጌታውን ልደት' },
                { timestamp: 80, text: 'የእረኝነት ሥራ ተንቆ እንዲቀር ብሎ ሰው በልማዱ ደንግጎ ነበር' },
                { timestamp: 95, text: 'የብዙ ሰው እራስ መሆኑን እረኛ ክርስቶስ ሲወለድ ተረዳነው እኛ' }
              ],
            }
          
          ],
        },
      ],
    },

    // ═══════════════════════════════════════════════════════
    // CATEGORY 5
    // ═══════════════════════════════════════════════════════
    {
      id: 'yemikael_mezmur',
      name: 'የቅዱስ ሚካኤል መዝሙራት',
      icon: require('../icons/playlist.png'),
      color: '#d1cf45',
      image: require('../assets/images/mikael.jpg'), 
      subcategories: [
        {
          id: 'yemikael_sub_1',
          name: 'እዝል ዓራራይ ቅኝት',
          image: require('../assets/images/mikael.jpg'), 
          songs: [
            {
              id: 280,
              title: 'ሰላም ለከ ሚካኤል ሐመልማለ ወርቅ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mikael.jpg'),
              audio_url: require('../assets/music/Selam_Leke_1.opus'),
              duration: 120,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ሰላም ለከ (3) ሚካኤል ሐመልማለ ወርቅ(2)' }
              ],
            },
            {
              id: 281,
              title: 'ሰላም ለከ (2)',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mikael.jpg'),
              audio_url: require('../assets/music/Selam_Leke_2.opus'),
              duration: 115,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ሰላም ለከ(3) ሚካኤል ሰላም ለከ(2)' }
              ],
            },
            {
              id: 282,
              title: 'መልአከ ሰላምነ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mikael.jpg'),
              audio_url: require('../assets/music/Melake_Selamne.opus'),
              duration: 180,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'መልአከ ሰላምነ ሊቀ መላእክት ሚካኤል(2)' },
                { timestamp: 10, text: 'ሰአል ወጸሊ በእንቲአነ አዕርግ ጸሎተነ ቅድመ መንበሩ ለመድኃኔዓለም(2)' },
                { timestamp: 20, text: 'ትርጉም የሰላም መልአክ ሚካኤል ሆይ በመድኃኔዓለም ፊት ስለ እኛ ለምንልን ጸሎታችንንም አሳርግልን።' }
              ],
            },
            {
              id: 283,
              title: 'ርዕዩ እበዩ ለቅዱስ ሚካኤል',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mikael.jpg'),
              audio_url: require('../assets/music/Riyu_Ebeyu.opus'),
              duration: 160,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ርዕዩ ዕበዩ ለቅዱስ ሚካኤል(2)' },
                { timestamp: 10, text: 'ዕውራን ይሬእዩ ወጽሙማን ይሰምዑ እለ ለምጽ ይነጽሑ እለ መጽኡ ኅቤሁ (2)' },
                { timestamp: 20, text: 'ትርጉም ኑ እዩ የሚካኤልን ተአምራት(2) እውራን ያያሉ የማይሰሙት ይሰማሉ ለምጻሞችም ይነጻሉ ወደ እርሱ የመጡ ሁሉ (2)' }
              ],
            },
            {
              id: 284,
              title: 'ሚካኤል አማልደን',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mikael.jpg'),
              audio_url: require('../assets/music/Mikael_Amalden.opus'),
              duration: 140,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ሚካኤል አማልደን ከአምላካችን (2)' },
                { timestamp: 10, text: 'እንዳንጠፋ እንዳንሞት በነፍሳችን አደራህን ቁምልን ከጎናችን (2)' }
              ],
            },
            {
              id: 285,
              title: 'ሚካኤል ሊቅ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mikael.jpg'),
              audio_url: require('../assets/music/Mikael_Like.opus'),
              duration: 155,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ሚካኤል ሊቅ ልብሱ ዘመብረቅ(2) ዐይኑ ዘርግብ(2)' },
                { timestamp: 10, text: 'ሚካኤል ሐመልማለ ወርቅ(2)' },
                { timestamp: 20, text: 'ትርጉም አለቃ የሆነ ሚካኤል ልብሱ መብረቅ ነው ዐይኖቹም የርግብ ዐይን ይመስላሉ ሚካኤል የወርቅ ሐመልማል ነው' }
              ],
            },
            {
              id: 286,
              title: 'በአምሳለ ርግብ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mikael.jpg'),
              audio_url: require('../assets/music/Beamsale_Regbwerede.opus'),
              duration: 145,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'በአምሳለ ርግብ ወረደ መልአክ ወረደ(2)' },
                { timestamp: 10, text: 'ወረደ (4) ሚካኤል መልአክ ወረደ(2)' },
                { timestamp: 20, text: 'ትርጉም መልአኩ ሚካኤል በርግብ አምሳል ወረደ እነሆ መልአክ ወረደ' }
              ],
            },
            {
              id: 287,
              title: 'ሰአሊ ወጸሊ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mikael.jpg'),
              audio_url: require('../assets/music/Seale_Wesely.opus'),
              duration: 130,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ሰአል ወጸሊ ወጸሊ በእንቲአነ (2) ሚካኤል ሊቀ መላእክት (2)' },
                { timestamp: 10, text: 'ትርጉም የመላእክት ሚካኤል ስለእኛ ለምን ጸልይ' }
              ],
            },
            {
              id: 288,
              title: 'ከመ ትባርከነ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mikael.jpg'),
              audio_url: require('../assets/music/Keme_Tibarekene.opus'),
              duration: 160,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ከመ ትባርከነ በመስቀልከ ዘወርቅ(2)' },
                { timestamp: 10, text: 'ተዋነይ በጽድቅ(4) ቅዱስ ሚካኤል ሐመልማለ ወርቅ(2)' },
                { timestamp: 20, text: 'ትርጉም የወርቅ ሐመልማለ ሚካኤል ሆይ በወርቅ መስቀል ትባርከን ዘንድ በእውነት በመካከላችን ተገኝ' }
              ],
            },
            {
              id: 289,
              title: 'ሐመልማለ ወርቅ (2)',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mikael.jpg'),
              audio_url: require('../assets/music/Hamelmale_Werke.opus'),
              duration: 140,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ሐመልማለ ወርቅ(3) ሚካኤል(2)ሐመልማለ ወርቅ(2)' },
                { timestamp: 10, text: 'ትርጉም ልብስ እንደ መብረቅ የሆነ ሚካኤል የወርቅ ሐመልማል ነው' }
              ],
            },
            {
              id: 290,
              title: 'ምስለ ሚካኤል ወገብርኤል',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mikael.jpg'),
              audio_url: require('../assets/music/Mislemikael_Wegebrel.opus'),
              duration: 175,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ምስለ ሚካኤል ወገብርኤል ንዒ ሠናይትየ ማርያም(2)' },
                { timestamp: 10, text: 'ንዒ(8)እመ አምላክ ንዒ ማርያም(2)' },
                { timestamp: 20, text: 'ትርጉም ከሚካኤልእና ከገብርኤል ጋር የአምላክ እናት ነይ ማርያም(2) ነይ(8)የአምላክ እናት ነይ ማርያም(2) ' }
              ],
            },
            {
              id: 291,
              title: 'ንግረኒ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mikael.jpg'),
              audio_url: require('../assets/music/Nigreni.opus'),
              duration: 140,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ንግረኒ እስመ አጽናዕከኒ ወይቤሌኒ(2)' },
                { timestamp: 10, text: 'ሶበ ተአምር ዳዕሙ ሚካኤል መልአከክሙ(2)' }
              ],
            },
            {
              id: 292,
              title: 'አንተኑ ሚካኤል (መና)',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mikael.jpg'),
              audio_url: require('../assets/music/Antenu_Mikael_1.opus'),
              duration: 135,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'አንተኑ ሚካኤል መና (2) ዘአውረድከ (2)' },
                { timestamp: 10, text: 'ወአንተኑ ለእስራኤል መና ዘአውረድከ (2)' },
                { timestamp: 20, text: 'ትርጉም፡- ለእስራኤል መናን ያወረድክ ሚካኤል አንተ ነህ' }
              ],
            },
            {
              id: 293,
              title: 'አንተኑ ሚካኤል (ለእስራኤል)',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mikael.jpg'),
              audio_url: require('../assets/music/Antenu_Mikael_2.opus'),
              duration: 150,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'አንተኑ ሚካኤል ለእስራኤል ዘአውረድከ መና(2)' },
                { timestamp: 10, text: 'ዘአውረድከ መና (4) ሚካኤል ሊቀ ደብረ ሲና(2)' },
                { timestamp: 20, text: 'ትርጉም፡- ለእስራኤል መናን ያወረድክ ሚካኤል አንተ ነህ' }
              ],
            },
            {
              id: 294,
              title: 'ውእቱ ሚካኤል',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mikael.jpg'),
              audio_url: require('../assets/music/Weetu_mikael_edited.opus'),
              duration: 170,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ውእቱ ሚካኤል መልአከ ኃይል ልዑል ውእቱ ልዑለ መንበር (2)' },
                { timestamp: 10, text: 'ይስአል ለነ ረዳኤ ይኵነነ ይስአል ለነ አመ ምንዳቤነ (2)' },
                { timestamp: 20, text: 'ትርጉም፡- ይህ መቀመጫው ከፍ ያለ ኃያል መልአክ ሚካኤል በችግራችን ጊዜ ይለምንልን ረዳት ይሁነን' }
              ],
            },
            {
              id: 295,
              title: 'አመ ይሰቅልዎ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mikael.jpg'),
              audio_url: require('../assets/music/Ame_Yiskelwo.opus'),
              duration: 165,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'አመ ይሰቅልዎ አይሁድ ለእግዚእነ ሚካኤል አርመመ ወገብርኤል ተደመ (2)' },
                { timestamp: 10, text: 'ፀሐይ ጸልመ ወወርኅ ደመ ኮነ ወሪዶ እመስቀሉ ለኩሉ አበርሃ(2) ' },
                { timestamp: 20, text: 'ትርጉም፡- አይሁድ ጌታችንን በሰቀሉት ጊዜ ሚካኤል ዝም አለ ገብርኤል ተገረመ ፀሐይ ጨለመ ጨረቃም ደም ሁነ ከመስቀሉ ወርዶ ለሁሉ አበራ' }
              ],
            },
            {
              id: 296,
              title: 'ጸሊ ኀበ አምላክ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mikael.jpg'),
              audio_url: require('../assets/music/Seli_Habeamlak.opus'),
              duration: 125,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ጸሊ ኀበ አምላክ ሚካኤል መልአክ(2)' },
                { timestamp: 10, text: 'ዓውደ ዓመት ከመ ይትባረክ(2)' }
              ],
            },
            {
              id: 297,
              title: 'ዘይቤ በነቢይ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mikael.jpg'),
              audio_url: require('../assets/music/Zeybe_Wenebiye.opus'),
              duration: 210,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ዘይቤ በነቢይ ወርዘውኩሒ ወረሳይኩ ጻድቅሰ እንዘዘይትገደፍ ኢርዕይኩ ላዕለ ደብረ ብርሃን(2)' },
                { timestamp: 10, text: 'አድኅነኒ እስመ ይፈቅደኒ ወለሞትስ ባሕቱ ኢመጠወኒ መልአከ ሰላም መድኃኒተ ኮነኒ ቅዱስ ሚካኤል(2)' }
              ],
            },
            {
              id: 298,
              title: 'ቀዋምያን ለነፍሳት',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mikael.jpg'),
              audio_url: require('../assets/music/Kewamyane.opus'),
              duration: 160,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ቀዋምያን ለነፍሳት እሙንቱ ሊቃናት ሚካኤል ወገብርኤል (2)' },
                { timestamp: 10, text: 'ይትፌነው ለሣሕል (2) እም ኀበ እግዚእ እምልዑል(2)' },
                { timestamp: 20, text: 'ትርጉም ለነፍሳት የቆሙት እነዚህ መላእክት ሚካኤልና ገብርኤል ከልዑል ዘንድ ለይቅርታ ይላካሉ' }
              ],
            },
            {
              id: 299,
              title: 'መዓዛ ሠናይ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mikael.jpg'),
              audio_url: require('../assets/music/Meaza_Senay.opus'),
              duration: 110,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'መዓዛ ሠናይ ሠናይ(2) ሚካኤል መዓዛ ሠናይ (2)' }
              ],
            },
            {
              id: 300,
              title: 'ደብሩሰ ለቅዱስ ሚካኤል',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mikael.jpg'),
              audio_url: require('../assets/music/Debruse_Lekidus_Mikael.opus'),
              duration: 180,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ደብሩሰ ለቅዱስ ሚካኤል ትመስል ደብረ ሲና ትመስል ደብረ ሲና(2)' },
                { timestamp: 10, text: 'ዘኀደረ ላዕሌሃ እግዚአብሔር ሐፁር ይሐውዳ ወጽጌረዳ በትምህርተ መስቀል (2)' }
              ],
            },
            {
              id: 301,
              title: 'ባሕራንኒ ይቤ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mikael.jpg'),
              audio_url: require('../assets/music/Bahranine_Yibe.opus'),
              duration: 320,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ባሕራንኒ ይቤ ባሕራንኒ(3) ኦኦ ዘነገደ ባሕር ርዒክዎ ለሚካኤል ወስእንኩ ጠይቆቱ ዘይብል(2)' },
                { timestamp: 15, text: 'የሞቱን ደብዳቤ ቅዱስ ሚካኤል ሚካኤል አጥፍቶ ቅዱስ ሚካኤል' },
                { timestamp: 25, text: 'ባሕራንን አዳነው ቅዱስ ሚካኤል በሠርግ ተክቶ ቅዱስ ሚካኤል' },
                { timestamp: 35, text: 'ሰዳዴ ሳጥናኤል ቅዱስ ሚካኤል ሊቀመላእክት ቅዱስ ሚካኤል' },
                { timestamp: 45, text: 'እኛንም አድነን ቅዱስ ሚካኤል ከሲኦል እሳት ቅዱስ ሚካኤል' },
                { timestamp: 55, text: 'ከሊቀነቢያት ቅዱስ ሚካኤል ከነሙሴ ጋራ ቅዱስ ሚካኤል' },
                { timestamp: 65, text: 'ሕዝበ እስራኤልን ቅዱስ ሚካኤል ሚካኤል ሲመራ ቅዱስ ሚካኤል' },
                { timestamp: 75, text: 'ቀን ደመና ጥሎ ቅዱስ ሚካኤል ሌሊት እያበራ ቅዱስ ሚካኤል' },
                { timestamp: 85, text: 'ተሻግረው አለፉ ቅዱስ ሚካኤል እስራኤል በተራ ቅዱስ ሚካኤል' },
                { timestamp: 95, text: 'በአፎሚያ ላይ ቅዱስ ሚካኤል ሲመክር ጠላት ቅዱስ ሚካኤል' },
                { timestamp: 105, text: 'ፈጥነው የደረስከው ቅዱስ ሚካኤል ሊቀመላእክት ቅዱስ ሚካኤል' },
                { timestamp: 115, text: 'እኛንም ጠብቀን ቅዱስ ሚካኤል ከሲኦል እሳት ቅዱስ ሚካኤል' },
                { timestamp: 125, text: 'ፈጥነህ ድረስልን ቅዱስ ሚካኤል ሁነን ረዳት ቅዱስ ሚካኤል' }
              ],
            },
            {
              id: 302,
              title: 'ኃያል ኃያል',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mikael.jpg'),
              audio_url: require('../assets/music/Hayal_Hayal.opus'),
              duration: 280,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ኃያል ኃያል (4) ሰዳዴ ሳጥናኤል (2) ኃያል ገባሬ ኃይል' },
                { timestamp: 15, text: 'ባሕራንን የረዳው ተላፊኖስን ያዳነው(2) መልአኩ ሚካኤል ነው(2) የሞቱን ደብዳቤ የለወጠው' },
                { timestamp: 25, text: 'እምእደ ረበናት (4) ሶስናን ያዳናት (2)ሚካኤል መልአከ ምሕረት' },
                { timestamp: 35, text: 'ዲያብሎስን ያዋረድከው በእሳት ሰይፍ የቀጣኸው(2)' },
                { timestamp: 45, text: 'ሚዛንህ ትክክል ነው(2) ሚካኤል ግብርህ ድንቅ ነው' },
                { timestamp: 55, text: 'በሐዘን በትካዜ ያለሁት ብላቴና (2) አጽናናኝ አረጋጋኝ(2) ሚካኤል ሊቀ ደብረ ሲና' }
              ],
            },
            {
              id: 303,
              title: 'ይበራል በክንፉ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mikael.jpg'),
              audio_url: require('../assets/music/Yiberal_Bekinfu.opus'),
              duration: 360,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ይበራል በክንፉ ምልጃውም ፈጣን ነው የአምላክ ስም አለበት ስሙ ሚካኤል ነው' },
                { timestamp: 10, text: 'ያሳደገኝ መልአክ ዛሬም ከኔ ጋር ነው(2)' },
                { timestamp: 20, text: 'ከፊት የቀደመ ደመናን ዘርግቶ እንዳልደናቀፍ ጉድባዎቼን ሞልቶ' },
                { timestamp: 30, text: 'ዛሬ ላለሁበት ብርቱ ጉልበት ሆነኝ ሰው ለመባል በቃሁ ሚካኤል ደገፈኝ' },
                { timestamp: 40, text: 'በእናቴ እቅፍ ገብቼ መቅደሱ አለው እስከ ዛሬ አጥሮኝ በመንፈሱ' },
                { timestamp: 50, text: 'የሕይወቴን ሰልፎች አለፍኩ ከርሱ ጋራ ተጽፏል በልቤ የሚካኤል ሥራ' },
                { timestamp: 60, text: 'በዙሪያዬ ተክሎ የእሳት ምሰሶውን ጽድቅ እየመገበ አሳደገኝ ልጁን' },
                { timestamp: 70, text: 'የአምላኬን ምስጋና ዘውትር እያሰማኝ እርሱ ነው ሚካኤል በመዝሙር የሞላኝ' },
                { timestamp: 80, text: 'ፊት ለፊት ተተክሎ ከታናሿ መንደር ይሰማኝ ነበረ ቅኔው ሲደረደር' },
                { timestamp: 90, text: 'ይወስደኛል ደጁ እየቀሰቀሰ ታላቁን በረከት በውስጤ አፈሰሰ' },
                { timestamp: 100, text: 'ሴኬም እንዳላይ ክንፎቹን ጋረደ መራኝ ወደ ሕይወት መዳኔን ወደደ' },
                { timestamp: 110, text: 'የሞዓብን ቋንቋ ከአፌ ላይ አጥፍቶ በፀጋው ቃል ቃኘኝ በበረከት ሞልቶ' }
              ],
            },
            {
              id: 304,
              title: 'አምላከ እስራኤል',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mikael.jpg'),
              audio_url: require('../assets/music/Amlake_Israel.opus'),
              duration: 340,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'አምላከ እስራኤል ታማኝ ጌታችን ለእስራኤል ለሙሴ የሆንከው መድኅን' },
                { timestamp: 10, text: 'ፈርዖን እንደገና በትዕቢት ቢገን ለእስራኤል አርበኛ መረጥከው ሙሴን' },
                { timestamp: 20, text: 'አማላጅ ነው ሚካኤል(2) የአምላክ ባለሟል የነሙሴ የሕዝበ እስራኤል(2)' },
                { timestamp: 30, text: 'ፈርዖን እንደገና ልቡ ተጸጽቶ ቢከታተላቸው ጦሩን አስከትቶ' },
                { timestamp: 40, text: 'ይመራቸው ነበር ሚካኤል በፋና ሌሊቱን በብርሃን ቀኑን በደመና' },
                { timestamp: 50, text: 'ሙሴ እንደታዘዘው አነሳ በትሩን እጆቹን ዘረጋ ገሰጸው ባሕሩን' },
                { timestamp: 60, text: 'እንደ ግንብ ቆመ ባሕረ ኤርትራ በደረቅ አለፉ እስራኤል በተራ' },
                { timestamp: 70, text: 'በፍጡራንና በፈጣሪ መሐል ሥልጣን የተሰጠው ሰውን ለማገልገል' },
                { timestamp: 80, text: 'ተራዳዒው መልአክ ጠባቂ የእስራኤል የመላእክት አለቃ ስሙ ነው ሚካኤል' },
                { timestamp: 90, text: 'ከባሕር ያወጣው ጸጋዘአብን ከአረመኔው ንጉሥ እግዚኀረያን' },
                { timestamp: 100, text: 'ከልለህ የጠበቅህ በታላቅ ተአምራት እኛንም ጠብቀን ከበደል ከኃጢአት' },
                { timestamp: 110, text: 'መልአኩ ሚካኤል አማላጃችን እንለምንሃለን እንድትጠብቀን' },
                { timestamp: 120, text: 'አምላክ በፍርድ ቀን ጻድቃንን ሲጠራ ዋስ ጠበቃ ሁነን ሚካኤል አደራ' }
              ],
            },
            {
              id: 305,
              title: 'የስሙ ትርጓሜ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mikael.jpg'),
              // audio_url: 'TODO: add local file for song id 305',
              duration: 300,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'የስሙ ትርጓሜ ማን እንደ እግዚአብሔር ነው የሰውን ወደ አምላክ የአምላክን ወደ ሰው' },
                { timestamp: 10, text: 'እኛን የሚረዳን ዘወትር በምልጃው የመላእክት አለቃ ቅዱስ ሚካኤል ነው(2)' },
                { timestamp: 20, text: 'ከጉድጓድ ተጥሎ ፍጹም ከሚያስፈራው ከተራቡ አናብስት ዳንኤል ያዳንከው' },
                { timestamp: 30, text: 'እኛንም ተራዳን ቸል አትበለን ሰይጣን በተንኮሉ ወጥመድ ሳይጥለን' },
                { timestamp: 40, text: 'የክፉ ሰው ሥራው ክፉ ሀሳብ ነውና በቅንነት መንገድ ከቶ አይሄድምና' },
                { timestamp: 50, text: 'የሞቱን ደብዳቤ ለባሕራን ሲሰጠው ሚካኤል አንስቶ በደስታ ለወጠው' },
                { timestamp: 60, text: 'ገና ብላቴና ሳለሁ አንድ ፍሬ ሰው ሁሉ ሲንቀኝ ምስጋና ጀምሬ' },
                { timestamp: 70, text: 'ፀጋዬን አብዝቶ ያበቃኝ ለዚህ ክብር የሚካኤል አምላክ ይመስገን እግዚአብሔር' }
              ],
            },
            {
              id: 306,
              title: 'ቅዱስ ሚካኤል ነፍሴ ሲጨነቅ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mikael.jpg'),
              // audio_url: 'TODO: add local file for song id 306',
              duration: 350,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ቅዱስ ሚካኤል(3) ነፍሴ ሲጨነቅ ሲዝል ሥጋዬ ፈጥነህ ተራዳኝ ዋስ ጠበቃዬ(2)' },
                { timestamp: 15, text: 'አንተ ስለሆንክ ሚካኤል የአምላክ ባለሟል ሚካኤል ልመና ፈጥኖ ሚካኤል ከአምላክ ያቀርባል ሚካኤል' },
                { timestamp: 30, text: 'የዋህ መልአክ ነው አዛኝ ለሰው ምልጃው ፈጣን ነው ለምናምነው(2)' },
                { timestamp: 45, text: 'ደዌ የፀናበት ሚካኤል ባንተ ይድናል ሚካኤል በአደባባዩ ሚካኤል ምስክር ሆኗል ሚካኤል' },
                { timestamp: 60, text: 'ከቤትህ መጥቶ የተማፀነ በቃል ኪዳንህ ሕይወቱ ዳነ(2)' },
                { timestamp: 75, text: 'ከአምላክ ተሰጥቶ ሚካኤል ክብርህ ያበራል ሚካኤል ለጎስቋላው ሰው ሚካኤል መጠጊያ ሆኗል ሚካኤል' },
                { timestamp: 90, text: 'ትንሽ ትልቁ ድሃው ሀብታሙ ለምኖ አግኝቷል ከአምላክ በስሙ(2)' },
                { timestamp: 105, text: 'በብሉይ ኪዳን ሚካኤል ከአምላክ ተልከህ ሚካኤል ሕዝበ እስራኤልን ሚካኤል ነጻ ያወጣህ ሚካኤል' },
                { timestamp: 120, text: 'በሐዲስ ኪዳንም ድንቅ ሥራ አለህ በተአምራህ ትፈውሳለህ(2)' },
                { timestamp: 135, text: 'ባለ መድኃኒት ሚካኤል ያቃተውን ሚካኤል ፈዋሽ ፀበልህ ሚካኤል ሆኖኛል ኃይል ሚካኤል' },
                { timestamp: 150, text: 'እንደ መጻጉዕ ድኅነት አገኘው ፈውሰኸኛል ባንተ ተመካው(2)' }
              ],
            },

            
          ],
        },
        {
          id: 'yemikael_sub_2',
          name: 'ግእዝ 1',
          image: require('../assets/images/mikael.jpg'), 
          songs: [
            {
              id: 307,
              title: 'ሚካኤል ስዩም',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mikael.jpg'),
              audio_url: require('../assets/music/Mikael_Siyum.opus'),
              duration: 130,
              genre: 'ግእዝ 1',
              lyrics: [
                { timestamp: 0, text: 'ሚካኤል ስዩም(2) ሊቀመላእክት(2)' },
                { timestamp: 10, text: 'መዝገበ ርኅራሄ(3) ወየዋህ(2)' },
                { timestamp: 20, text: 'ትርጉም፡ የተሾመ የመላእክት አለቃ ሚካኤል የዋህ የርህራሄ መዝገብ ነው' }
              ],
            },
            {
              id: 308,
              title: 'ሰፊሖ ክነፊሁ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mikael.jpg'),
              audio_url: require('../assets/music/Sefihu_KInefiwo.opus'),
              duration: 125,
              genre: 'ግእዝ 1',
              lyrics: [
                { timestamp: 0, text: 'ሰፊሖ ክነፊሁ (2)' },
                { timestamp: 10, text: 'ክነፊሁ ይጸልል ዲቤነ(2)' },
                { timestamp: 20, text: 'ትርጉም፡ ክንፉን ዘርግቶ እኛን ይጋርደን ይጠብቀን' }
              ],
            },
            {
              id: 309,
              title: 'እልፍ አእላፍት',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mikael.jpg'),
              audio_url: require('../assets/music/Elf_Aelaf.opus'),
              duration: 300,
              genre: 'ግእዝ 1',
              lyrics: [
                { timestamp: 0, text: 'እልፍ አእላፍት ወትእልፊት ቅዱሳን ንጹሐን መላእክት' },
                { timestamp: 10, text: 'ቆሙ ለአገልግሎት ፀንተው በአንድነት ቅዱስ ቅዱስ ቅዱስ አምላክ በማለት(2)' },
                { timestamp: 25, text: 'ኢዮር ራማ ኤረር የመላእክት ሀገር የሃይማኖት የፍቅር የምልክት ሕብር እውነት የታየብሽ የመላእክት ሀገር' },
                { timestamp: 45, text: 'እንጽና ሲል ገብርኤል ባለንበት ቦታ በሳጥናኤል ነገድ ነበረ ሁካታ ግማሹ እየካደ ቀሪው ሲያመነታ' },
                { timestamp: 60, text: 'የሳጥናኤል ምኞት እንደ አበባ ረግፎ' },
                { timestamp: 75, text: 'ሚካኤል ተሾመ በእምነት ተደግፎ ሳጥናኤል ወደቀ ጸጋውን ተገፎ' },
                { timestamp: 90, text: 'ቅዱሳን መላእክት በእምነት የጸናችሁ በታላቅ አክብሮት ሰላም እንበላችሁ' },
                { timestamp: 105, text: 'ስግደት ዘበጸጋ እንስገድላችሁ' }
              ],
            },
            
          ],
        },
        {
          id: 'yemikael_sub_3',
          name: 'ግእዝ 2',
          image: require('../assets/images/mikael.jpg'), 
          songs: [
            {
              id: 310,
              title: 'ተወከፍ ጸሎትነ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mikael.jpg'),
              audio_url: require('../assets/music/Tewekef_Tselotne.opus'),
              duration: 120,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'ተወከፍ ጸሎትነ ውስተ ኖኃ ሰማይ(2)' },
                { timestamp: 10, text: 'ከመ መዓዛ ሠናይ(4)ሊቀመላእክት(2)' }
              ],
            },
            {
              id: 311,
              title: 'በእደ መልአኩ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mikael.jpg'),
              audio_url: require('../assets/music/Bede_Melaku.opus'),
              duration: 115,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'በእደ መልአኩ ይዕቀበነ(2) ሰላመ ዚአሁ የሀበነ(2)' },
                { timestamp: 15, text: 'ትርጉም በመልአኩ እጅ ይጠብቀን ሰላምን ይስጠን' }
              ],
            },
            {
              id: 312,
              title: 'ዕቀብ ሚካኤል',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mikael.jpg'),
              audio_url: require('../assets/music/Ekeb_Mikael.opus'),
              duration: 130,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'ዕቀብ ሚካኤል ዕቀብ ሀገረ ኢትዮጵያ(2)' },
                { timestamp: 10, text: 'ሐመልማለ ወርቅ(2) ቅዱስ ሚካኤል ሐመልማለ ወርቅ(2)' },
                { timestamp: 20, text: 'ትርጉም ልብሱ እንደ መብረቅ የሆነ የወርቅ ሐመልማል ሚካኤል ኢትዮጵያን ጠብቃት' }
              ],
            },
            {
              id: 313,
              title: 'ነዋ ሚካኤል',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mikael.jpg'),
              audio_url: require('../assets/music/Newa_Mikael.opus'),
              duration: 125,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'ነዋ ሚካኤል መልአከክሙ(2)' },
                { timestamp: 10, text: 'ይስአል ለክሙ በእንተ ምሕረት(2)' },
                { timestamp: 20, text: 'ትርጉም እነሆ መልአካችሁ ሚካኤል ስለ ምሕረት ይለምንላችሁ' }
              ],
            },
            {
              id: 314,
              title: 'ውእቱ ሊቆሙ ለመላእክት',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mikael.jpg'),
              audio_url: require('../assets/music/Wetu_LIkomu.opus'),
              duration: 150,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'ውእቱ ሊቆሙ ለመላእክት ወመልአኮሙ ስሙ ሚካኤል(2)' },
                { timestamp: 10, text: 'ልብሱ ዘመብረቅ ዓይኑ ዘርግብ ሊቀመላእክት(2)' },
                { timestamp: 20, text: 'ትርጉም ለመላእክት አለቃቸው እርሱ ነው ስሙም ሚካኤል ነው' }
              ],
            },
            {
              id: 315,
              title: 'ሚካኤል እምሰማያት',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mikael.jpg'),
              audio_url: require('../assets/music/Mikael_emsemayat.opus'),
              duration: 110,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'ሚካኤል እምሰማያት(2) እምልዑላን ወረደ እምልዑላን (4)' }
              ],
            },
            {
              id: 316,
              title: 'ዝኬ ውእቱ ሚካኤል',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mikael.jpg'),
              audio_url: require('../assets/music/Zeke_weetu_mikael_edited.opus'),
              duration: 145,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'ዝኬ ውእቱ ሚካኤል ሕብስተ መና ዘአውረደ (2)' },
                { timestamp: 10, text: 'ወከመ አያያተ መዓር(2) ጥዑም ፈድፋደ ሊቀመላእክት(2)' },
                { timestamp: 20, text: 'ትርጉም ሕብስተ መናን ያወረደው ቅዱስ ሚካኤል ይህ ነው(2) የመላእክት አለቃ እንደማር(2) ወለላ በጣም የሚጣፍጥ ነው(2)' }
              ],
            },
            {
              id: 317,
              title: 'ፈተና ቢገጥማት',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mikael.jpg'),
              audio_url: require('../assets/music/Fetena_Bigetmat.opus'),
              duration: 280,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'ፈተና ቢገጥማት(2) ቅድስት አፎሚያ ሚካኤል (2) ብላ ስትጣራ (2)' },
                { timestamp: 15, text: 'ፈጥኖ አዳናት ከጭንቅ ከመከራ(2)' },
                { timestamp: 30, text: 'ነውና እምነቷ(2) ጽኑ በምግባሯ(2)ሚካኤል መጣላት(2) ተአምሩን ሊሠራ ለአፎሚያ ተአምሩን ሊሠራ(2)' },
                { timestamp: 45, text: 'ፍጡነ ረድኤት መጣና (2) ገስግሶ(2) እንደ ኃያልነቱ ኃይሉን አፈራርሶ (2)በመጣበት አስኬደው መልሶ(2)' },
                { timestamp: 60, text: 'በእምነት ብንጠራው (2) ጸንተን በሃይማኖት(2)' },
                { timestamp: 75, text: 'ቶሎ ይደርስልናል ፍጡነ ረድኤት (2) ሚካኤል ሊቀመላእክት' },
                { timestamp: 90, text: 'ታላቁ ሚካኤል (2) ተራዳሂው መልአክ(2) ምሕረት እንዲሰጠን ለምንልን ከአምላክ(2)' }
              ],
            },
            {
              id: 318,
              title: 'ሚካኤል ሐመልማለ ወርቅ (2)',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mikael.jpg'),
              audio_url: require('../assets/music/Mikaele_Hamelmale_Werk.opus'),
              duration: 320,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'ሚካኤል ሐመልማለ ወርቅ(2) ልብሱ ዘመብረቅ(2)' },
                { timestamp: 15, text: 'ሚካኤል ሐመልማለ ወርቅ የወርቅ ልምላሜ ና ና ና ስለምንህ ቆሜ' },
                { timestamp: 30, text: 'ገብርኤል ሊቀመላእክት(2) ሠለስቱ ደቂቅን ያወጣ ከእሳት(2)' },
                { timestamp: 45, text: 'በሠለስቱ ደቂቅ ናብከደነጾር ተቆጣ እሳቱ ነደደ ነበልባሉ ወጣ ግን ኃያሉ ገብርኤል ሊያድናቸው መጣ' },
                { timestamp: 60, text: 'ሠለስቱ ደቂቅ ይባርክዎ ለእግዚአብሔር' },
                { timestamp: 75, text: 'ስቡሕኒ ውእቱ ልዑልኒ ውእቱ ብለው ምስጋና አቀረቡ በእሳቱ ላይ ሆነው' },
                { timestamp: 90, text: 'ራጉኤል ሊቀመላእክት(2) እም ኀበ ላዕል ወረደ(2)' },
                { timestamp: 105, text: 'መልአከ ብርሃናት ራጉኤል ናና ና ና ና አማላጅ ነህና' },
                { timestamp: 120, text: 'ዑራኤል ሊቀመላእክት(2) ለዕዝራ ያጠጣ ጽዋዐ ሕይወት(2)' },
                { timestamp: 135, text: 'በዓለም ፈተና በስቃይ ኩነኔ ስባዝን ስጨነቅ ስጠበብ ወይ እኔ ዑራኤል የኔ ኃይል ቁምልኝ ከጎኔ' }
              ],
            },
            {
              id: 319,
              title: 'ኦ ሚካኤል',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mikael.jpg'),
              audio_url: require('../assets/music/O_Mikael_2.opus'),
              duration: 200,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'ኦ ሚካኤል (2) ሊቀ መላእክት በኃጢአት እንዳንወድቅ እንዳንሞት' },
                { timestamp: 15, text: 'ፈጥነህ ተራዳን አጽናን በእምነት(2)' },
                { timestamp: 30, text: 'ለያዕቆብ ነገድ ሚካኤል ለእስራኤል ሚካኤል ጠባቂያቸው ነህ ሚካኤል መልአከ ኃይል ሚካኤል' },
                { timestamp: 45, text: 'ፍቅርን(ሰላም) አድለን ምሕረት ቅዱስ ሚካኤል የእኛ አባት(2)' },
                { timestamp: 60, text: 'ነፀብራቃዊ ሚካኤል ተክህኖ ልብስህ ሚካኤል ሐመልማለ ወርቅ ሚካኤል ዐይኑ ዘርግብ ሚካኤል' },
                { timestamp: 75, text: 'በሥዕል ፊት ሚካኤል እሰግዳለሁ ሚካኤል ፈጥነህ አረጋጋኝ ሚካኤል አለው በለኝ ሚካኤል ' }
              ],
            },
            
          ],
        },
        {
          id: 'yemikael_sub_4',
          name: 'ግእዝ 3',
          image: require('../assets/images/mikael.jpg'), 
          songs: [
            {
              id: 320,
              title: 'ዐይኑ ዘርግብ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/mikael.jpg'),
              audio_url: require('../assets/music/Aynu_Zergbe.opus'),
              duration: 110,
              genre: 'ግእዝ 3',
              lyrics: [
                { timestamp: 0, text: 'ዐይኑ ዘርግብ (3)' },
                { timestamp: 10, text: 'ሚካኤል ሐመልማለ ወርቅ(2)' }
              ],
            }
            
          ],
        },
      ],
    },
// ═══════════════════════════════════════════════════════
// CATEGORY 6
// ═══════════════════════════════════════════════════════
    {
      id: 'yemsgana_mezmurat',
      name: 'የምስጋና መዝሙራት',
      icon: require('../icons/playlist.png'),
      color: '#d1c845',
      image: require('../assets/images/misgana.jpg'), 
      subcategories: [
        {
          id: 'yemsgana_mezmurat_ezil_araray',
          name: 'እዝል ዓራራይ ቅኝት',
          image: require('../assets/images/misgana.jpg'), 
          songs: [
              {
                id: 321,
                title: 'እንደ እግዚአብሔር ያለ',
                artist: 'Traditional',
                cover_url: require('../assets/images/misgana.jpg'),
                audio_url: require('../assets/music/Endeegzaber_Yale.opus'),
                duration: 220,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'እንደ እግዚአብሔር ያለ ማንም የለምና/2/ እልል በሉ ቁሙ ለምስጋና(2)' },
                  { timestamp: 25, text: 'ባሕር ተከፈለ እስኪታይ መሬቱ ፈርኦን ወደቀ አልሰራም ትምክህቱ' },
                  { timestamp: 50, text: 'ደካሞቹም ፀንተው ተራመዱ ኃይለኞቹ ይኸው ተዋረዱ' },
                  { timestamp: 75, text: 'የኢያሪኮ ቅጽር የማይደፈረው ይኸው ፈራረሰ የሰው እጅ ሳይነካው' },
                  { timestamp: 100, text: 'ኃይለኞቹ ቢበረታቱብን እንጸናለን እርሱን ተደግፈን' },
                  { timestamp: 125, text: 'የተወረወረው የጠላታችን ጦር ሜዳ ላይ ወደቀ ጋሻ ሆኖ እግዚአብሔር' },
                  { timestamp: 150, text: 'ለሥላሴ ይድረስ ምስጋናችን ተሸነፈ አዳኝ ጠላታችን' },
                  { timestamp: 175, text: 'ባሕር ላይ ሲራመድ ሞገስ አለው እርሱ በግርማው ሲነሳ ጸጥ ይላል ንፋሱ' },
                  { timestamp: 200, text: 'የድንግል ልጅ እኛ ምናመልከው ከሃሊ ነው የለም የሚሳነው' }
                ],
              },
              {
                id: 322,
                title: 'የወደደኝ ጌታ',
                artist: 'Traditional',
                cover_url: require('../assets/images/misgana.jpg'),
                audio_url: require('../assets/music/Yewededegn_Geta.opus'),
                duration: 240,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'የወደደኝ ጌታ ምን አድርጌለት ነው ብዘምርለትም ያንስበታል ይኸው' },
                  { timestamp: 30, text: 'ከውድቀቴ አንስቶ ድካሜን ያገዝከኝ ሰባራውን ድልድይ ገጥመ ያሻገርከኝ(2)' },
                  { timestamp: 60, text: 'በኢያርኮ መንገድ ስለምን ቁጭ ብዬ ብርሃን እጅግ ናፍቆኝ ከሰው ተገልዬ' },
                  { timestamp: 90, text: 'የብርሃን ጌታ ወደኔ መጣና ዐይኔን አበራልኝ በእጁ ዳሰሰና' },
                  { timestamp: 120, text: 'ለብዙ ዘመናት አልጋ ላይ ተኝቼ የሚረዳኝ አጣው ጠሉኝ ዘመዶቼ' },
                  { timestamp: 150, text: 'የኔ ጌታ አምላኬ ወደኔ መጣና አልጋህን ተሸከም አለኝ ፈወሰና' },
                  { timestamp: 180, text: '12 ዓመት ደም እየፈሰሰኝ ምራቅ እየተፉ ሁሉም ሲያንቋሽሹኝ' },
                  { timestamp: 210, text: 'የጌታዬን ልብሱን ጫፉን ብዳስሰው ኃይልም ከእርሱ ወጣ ደሜን ቀጥ አረገው ሰካራም ዘማዊ ወንበዲ ነበርኩኝ የአመጻኞች መሪ ደመነ ያፈሰስኩኝ ዛሬ ግን ታሪኬን ጌታ ቀይሮታል ለኃያሉ እግዚአብሔር ምስጋና ይገባል ' }
                ],
              },
              {
                id: 323,
                title: 'ኑ በእግዚአብሔር ደስ ይበለን',
                artist: 'Traditional',
                cover_url: require('../assets/images/misgana.jpg'),
                audio_url: require('../assets/music/Nu_Beegzaber.opus'),
                duration: 260,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'ኑ በእግዚአብሔር ደስ ይበለን (2) ለታላቁ ክብር ለዚህ ላበቃን' },
                  { timestamp: 25, text: 'ከሞት ወደ ሕይወት ላሸጋገረን ኑ በእግዚአብሔር ኑ በድንግል ደስ ይበለን(2)' },
                  { timestamp: 50, text: 'የሰማዩን መንግሥት ርስቱን ለሰጠን ከጨለማ አውጥቶ ብርሃንን ላሳየን ለዚህ ድንቅ ውለታው ምስጋና ያንሰዋል በእርሱ ደስ ይበለን ክብር ይገባዋል' },
                  { timestamp: 75, text: 'ከአለት የፈለቀ ውኃ ጠጥተናል ሰማያዊ መና አምላክ መግቦናል ፍቅርህ የበዛ ነው ምን ልክፈልህ ጌታ ስምህን እናመስኝ ከጠዋት እስከ ማታ ' },
                  { timestamp: 100, text: 'በቃዴስ በረሃ ምንም በሌለበት በኤርትራ ባሕር ወጀብ በበዛበት ለሱ መንገድ አልው ከቶ ምን ተስኖት ልባችሁ አይፍራ በፍዱም እመኑት' },
                  { timestamp: 130, text: 'በባርነት ሳለን በድቅድቅ ዓለም ብርሃንን አገኘን በድንግል ማርያም ያጣነውን ሰላም ዛሬ ስገኘን እጅግ ደስ ይበለን በእመቤታችን' },
                  { timestamp: 160, text: 'የሐና የኢያቄም የእምነታቸው ፍሬ በእግዚአብሔር ፈቃድ ተወለደች ዛሬ የኢያቄም ስለቱ የሐና እምነት ለምኝልን ለኛ ኪዳነምሕረት' }
                ],
              },
              {
                id: 324,
                title: 'እልል በሉ በአንድነት ዘምሩ',
                artist: 'Traditional',
                cover_url: require('../assets/images/misgana.jpg'),
                audio_url: require('../assets/music/Elel_Belu.opus'),
                duration: 210,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'እልል በሉ በአንድነት ዘምሩ አመስግኑ ለክብሩ ዘምሩለት' },
                  { timestamp: 25, text: 'እንደ እግዚአብሔር ያለ ማንም የለም በሉ(2)' },
                  { timestamp: 50, text: 'በኃጢአት ባርነት ስንኖር ተገዝተን ከቤቱ ስንርቅ ትእዛዙን አፍርሰን አይቶ ዝም ላለን ጠላቶቹ ሳለን ምስጋና ይድረሰው ክብር ለእርሱ ይሁን(2)' },
                  { timestamp: 80, text: 'ራሱን አዋርዶ እኛን አከበረን ሥጋውና ደሙን ብሉ ጠጡ አለን መልካም እረኛ ነው የሚያሳጣን የለም ምስጋና ይድረሰው ለመድኃኔዓለም(2)' },
                  { timestamp: 110, text: 'ሕይወቱን የሰዋ እንደ አምላክ ማን አለ ለሰው ልጆች ብሎ በመስቀል ላይ ዋለ ፍቅሩ አይለካ አያልቅም ቢወራ ከሰማያት ወርዶ ሆነ ከእኛ ጋራ(2)' },
                  { timestamp: 140, text: 'ሥራውን እናድንቅ እንዲህ ለወደደን ከማያልቀው ፍቅሩ በረከት ላደለን ለማይነገረው ለአምላክ ስጦታ ውዳሴን እናቅርብ እንዘምር በእልልታ(2)' }
                ],
              },
              {
                id: 325,
                title: 'ሰዎች ደስ ይበለን',
                artist: 'Traditional',
                cover_url: require('../assets/images/misgana.jpg'),
                audio_url: require('../assets/music/Sewoch_Desyibelen.opus'),
                duration: 200,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'ሰዎች ደስ ይበለን በአምላካችን ከኃጢአት ባርነት ነጻ ላወጣን' },
                  { timestamp: 25, text: 'ተነሱ እናመስግን ውለታው ብዙ ነው ምን ይከፈለዋል ተመስገን ብቻ ነው(2)' },
                  { timestamp: 50, text: 'በኃጢአት በሽታ ተይዤ ሳለሁኝ መድኃኒት ክርስቶስ ከውድቀት አነሳኝ ስጦታው ብዙ ነው ለኔ የሰጠህኝ ተመስገን ብጫ ነው አምላክ ላንተ ያለኝ' },
                  { timestamp: 75, text: 'እንደ በርተሎሚዎስ ዕውር የነበርኩኝ ዛሬ ግን በአምላኬ ድኅነት አገኘሁኝ ሕጉ ለመንገዴ ብርሃን ሆኖኛል የርሱ ስለሆንኩኘ ሰላሙም ተርፎኛል' },
                  { timestamp: 105, text: 'በድንቅ አጠራርህ ጌታዬ የጠራኝ ከአጋንንት እስራት ነጻ አወጣህኝ አልፋና ኦሜጋ ዘለዓለም የምትኖር ኤልሻዳይ የሆንከው አማኑኤል ተመስገን' },
                  { timestamp: 135, text: 'የዕዳ ደብዳቤውን ጌታ የቀደደው የማዳኑን ሥራ በዐይኔ አይቻለሁ ቸርነቱ አያልቅም ድንቅ የሆነ ጌታ ስሙን እናመስግን እንዘምር በእልልታ ' }
                ],
              },
              {
                id: 326,
                title: 'አድርገህልኛልና',
                artist: 'Traditional',
                cover_url: require('../assets/images/misgana.jpg'),
                audio_url: require('../assets/music/Adergehlgnalna.opus'),
                duration: 230,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'አድርገህልኛልና በቸርነት አመሰግንሃለሁ እልል እልል ለዓለመ ዓለም አማኑኤል እገዛልሃለሁ መድኃኔዓለም(2)' },
                  { timestamp: 30, text: 'ቀኑ ጨልሞብኝ ዙሪያው ገደል ሆኖ የችግር አረንቋ ፊቴ ተደቅኖ ረዳት ያጣሁኝ በመሰለኝ ጊዜ ጽፈሞ አራቅክልኝ የልቤን ትካዜ' },
                  { timestamp: 60, text: 'አምላኬ ጉልበቴ ኃይሌ መመኪያዬ ጠላት ማሳፈሪያ የእምነት ጋሻዬ እንደማትተወኝ አሁን አውቂአልሁ ካለኝ ነገር ይልቅ ባንተ ታምኛለው' },
                  { timestamp: 90, text: 'ጥቂቷን አብዝተህ የምትመግብ ጌታ የምመልስልህ ባላገኝህ ስጦታ በቅንም በሊትም ሁሊ የሚያበራ መንክረ ባሕሪህ እጽብ ያንተ ስራ ' },
                  { timestamp: 120, text: 'አምላክ ሆይ ምስጋና ላንተ ይገባሃል ለምስኪኗ ጎጆ በረከት ሰጥተሃል ደሃ ነኝ አልልም ሀብቴ አንተ ነህና ማስሮዬ ሞልቶዋል ላይጎል እንደገና' }
                ],
              },
              {
                id: 327,
                title: 'እውነተኛው ሰላም',
                artist: 'Traditional',
                cover_url: require('../assets/images/misgana.jpg'),
                audio_url: require('../assets/music/Ewnetegnaw_Selam.opus'),
                duration: 210,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'እውነተኛው ሰላም ያለው ከቤትህ ነው(2) እርዳኝ አልናወጽ እለምንሃለሁ(2)' },
                  { timestamp: 25, text: 'ኃጢአቴን ሳስበው ልቤ ይጨነቃል ካንተ መለየቴ ነፍሴን አድክሞታል ወዳንተ መልሰኝ እኔ እመለሳለው እውነተኛው ሰላም ያለው ከቤትህ ነው' },
                  { timestamp: 50, text: 'በቅዳሴ ጸሎት ዘወትር እንዳልተጋሁ በአደባባይ ቆሜ ስምክን እንዳልጠራሁ ተሰነካክዬ ወድቅያለሁና እርዳኝ አማኑኤል በሃይማኖት ልጽና ' },
                  { timestamp: 80, text: 'ዐይኔም ዕንባ ያፍስስ ላልቅስ ስለ ኃጢአቴ የንስሐ ትሁን ቀሪዋ ሕይወቴ በመዳኔ ሰዓት በዛሪዋ እለት ፍቅርህን አስቤ መጣው ካንተ ቤት' },
                  { timestamp: 110, text: 'ጌታ ሆይ ዕንባዬን ፀፀቴን ተቀበል አባትህ(ሽ) ነኝ በለኝ እኔም ልጅ ነኝ ልበልህ ዘይት ሳላዘጋጅ ድንገት መጥተህብኝ በርህን በመዝጋት ከደጅ አታስቀረኝ' }
                ],
              },
              {
                id: 328,
                title: 'ታማልደናለች',
                artist: 'Traditional',
                cover_url: require('../assets/images/misgana.jpg'),
                audio_url: require('../assets/music/Tamaldenalch.opus'),
                duration: 250,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'ታማልደናለች (2) ማርያም(2)ቤዛዊተ ዓለም (4)' },
                  { timestamp: 25, text: 'ሚካኤል መልአክ ሊቀ መላእክት(2) ዘአውረድከ(2) መና እም ደመና(2)' },
                  { timestamp: 50, text: 'ገብርኤል መልአክ አብሣሬ ትስብእት(2) ዘአብሠራ(2) ለማርያም ንጽሕይት(2)' },
                  { timestamp: 75, text: 'ሩፋኤል መልአክ ሊቀ መላእክት(2) ዘአብርሃ(2) ዐይኑ ለጦቢት(2)' },
                  { timestamp: 100, text: 'ዑራኤል መልአክ ሊቀ መላእክት(2) ዘአስተዮ(2) ጽዋዓ ልቡና(4)' },
                  { timestamp: 130, text: 'ሰሎሞን ይቤላ(4) ርግብየ ሠናይትየ ሰሎሞን ይቤላ(2)' },
                  { timestamp: 160, text: 'ገብረ መንፈስ ቅዱስ (4) ሐዋርያ(2) ዘእስክንድርያ(2)' },
                  { timestamp: 190, text: 'ተክለ ሃይማኖት(4) ሐዋርያ)2) ዘኢትዮጵያ (2)' },
                  { timestamp: 220, text: 'ብርሃናተ ዓለም ጴጥሮስ ወጳውሎስ(2) አዕማደ(2) ቤተክርስቲያን(2)' }
                ],
              },
              {
                id: 329,
                title: 'እግዚአብሔር ሆይ እርዳኝ',
                artist: 'Traditional',
                cover_url: require('../assets/images/misgana.jpg'),
                audio_url: require('../assets/music/Egzaberhoy_Erdagn.opus'),
                duration: 240,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'እግዚአብሔር ሆይ እርዳኝ ቸርነት አድርገህ ዕድሜ ለንስሐ እንደ ሕዝቅያስ ሰጥተህ ጠማማውን ልቤን በቃልህ አቃንተህ(2)' },
                  { timestamp: 30, text: 'አላውቀውም ብሎ ሲጠየቅ ያመጸው ዶሮ እስኪጮህ ድረስ ሦስት ጊዜ የካደው የጅረት ወንዝ ነው የሰጠኸው እንባ ጴጥሮስ ተፀጽቶ ንስሐ እንዲገባ' },
                  { timestamp: 60, text: 'ጽዋው እንዳይደርሰኝ የይሁዳ ዕድል ልጅ ሆኖ ውሎ ማታ ከመኮብለል ጴጥሮስ እድለኛው አልቅሶ ተማረ በትዕቢቱ ይሁዳ እንደ ወጣ ቀረ' },
                  { timestamp: 90, text: 'ዘመኗን በሙሉ በዝሙት አቃጥላ ለንስሐ ጠራት ጌታ በገሊላ ታድሳ ተነሳች በእንባዋ ብዛት እግሩ ሥር ተደፍታ ማርያም እንተ እፍረት' },
                  { timestamp: 120, text: 'አመጸኛው ልቤ ዛሬስ መች ይተኛል በኃጢአት በዝሙት በስርቆት ይዋኛል ወደ ቀድሞ ግብሩ እንዳይመለስ ፍቅር በእኔ ሰርጾ ኃጢአቴን ደምስስ' },
                  { timestamp: 150, text: 'በደላችንን ሁሉ ሳታስብ ትተህ በምጽህት ሰዓት ከጻድቃን ቆጥረህ ነጭ ልብስ ለብሰን ሆነን ካንተ ጋራ በሩ ሳይዘጋ አስገባን አደራ' }
                ],
              },
              {
                id: 330,
                title: 'አንቲ ዘአማን',
                artist: 'Traditional',
                cover_url: require('../assets/images/misgana.jpg'),
                audio_url: require('../assets/music/Yiberal_Bekinfu.opus'),
                duration: 280,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'አንቲ ዘአማን(2)ረከብኪ ጸጋ ክብረ ድንግል(2) የዐቢ ክብራ ለማርያም(2)' },
                  { timestamp: 30, text: 'በይ እንግዲህ ድንግል ዘበአማን ከእኛ አትሽሺ ዘበአማን የክርስቲያኑን ልብ ዘበአማን ትህትናን አልብሺ ዘበአማን' },
                  { timestamp: 60, text: 'የያሬድ ጸናጽል ዘበአማን የዘወትር ዝማሬ ዘበአማን የአባ ሕርያቆስ ዘበአማን የዘወትር ቅዳሴ ዘበአማን ርኅርይተ ኅሊና ዘበአማን' },
                  { timestamp: 90, text: 'የሐዋርያት ሞገስ ዘበአማን የመላእክት እህት ዘበአማን ማኀደረ ሥሉስ ዘበአማን' },
                  { timestamp: 120, text: 'ሥሉስ ቅዱስ ተብሎ የሚመሠገነው የፍጥረታት ገዥ ዘበአማን የአንቺ ልጅ እኮ ነው' },
                  { timestamp: 150, text: 'የምታምሪ ርግብ ዘበአማን ሰላምን ያስገኘሽ ዘበአማን ንጽሕናሽን አይቶ ዘበአማን ወልድ መረጠሽ ዘበአማን አትርሺን ድንግል ሆይ ዘበአማን እኛ ልጆሽን ዘበአማን' },
                  { timestamp: 180, text: 'ከአምላክ አስታሪቅን ዘበአማን እኛ ደካሞችን ዘበአማን ስለ በደላችን ዘበአማን ችላ ሳትይን ዘበአማን ምሕረት አሰጪን ዘበአማን ድንግል አትርሺን ዘበአማን' },
                  { timestamp: 210, text: 'የመመኪያችን ዘውድ ዘበአማን እመብርሃን ዘበአማን ከልጅሽ አስታርቂን ዘበአማን እንዳንቀር ወድቀን ዘበአማን' }
                ],
              },
              {
                id: 331,
                title: 'ከድንግል ማርያም ተወልዶ',
                artist: 'Traditional',
                cover_url: require('../assets/images/misgana.jpg'),
                audio_url: require('../assets/music/Kedingel_Tewwldo.opus'),
                duration: 150,
                genre: 'እዝል ዓራራይ ቅኝት',
                lyrics: [
                  { timestamp: 0, text: 'ከድንግል ማርያም ተወልዶ ሥጋን የለበሰው (2) እኛን ሊያድነን ነው' },
                  { timestamp: 30, text: 'በቀራንዮ ተሰቅሎ ደሙን ያፈሰሰው (2) እኛን ሊያድነን ነው' },
                  { timestamp: 60, text: 'በሦስተኛው ቀን ተነስቶ ሞትን ድል ያረገው (2) እኛን ሊያድነን ነው' }
                ],
              }
          ]
        },
        {
          id: 'yemsgana_mezmurat_geez_1',
          name: 'ግእዝ 1',
          image: require('../assets/images/misgana.jpg'), 
          songs: [
            {
              id: 332,
              title: 'ዋካ ይእቲ ወብርሃን',
              artist: 'Traditional',
              cover_url: require('../assets/images/misgana.jpg'),
              audio_url: require('../assets/music/Waka_Yiti.opus'),
              duration: 210,
              genre: 'ግእዝ 1',
              lyrics: [
                { timestamp: 0, text: 'ዋካ ይእቲ ወብርሃን(2) ቤተክርስቲያን(2)' },
                { timestamp: 20, text: 'ቀኑ ሲጨላልም ፈተናው ሲበዛ ሕይወት እንደ ጥላ ስታልፍ እንደ ዋዛ ቤተክርስቲያን ናት የምትሆነን ቤዛ' },
                { timestamp: 50, text: 'ስለተቀደሰች በንዝሐተ ደሙ ስለመሠረታት አምላክ በጥበቡ በውስጧ ይገኛል የአምላካችን ስሙ' },
                { timestamp: 80, text: 'መከራው ቢበዛ ቢጫነን ቀንበሩ ቢያጎሳቁለንም ደዌ ቸነፈሩ በውስጣችን አለ የአምላካችን ፍቅሩ' },
                { timestamp: 110, text: 'ሕመሙ ፀንቶብን ሲያሰቃየን ቁስሉ የማይድን ተብሎ በአዋቂዎች ሁሉ አዳነን ፈጣሪ በፈዋሽ ፀበሉ' },
                { timestamp: 140, text: 'በሞት ፈንታ ሕይወት ለሰጠን ፈጣሪ የድል ተአምራቱ ላረገን መስካሪ እንዘምር ለስሙ እንሁን ተናጋሪ' }
              ],
            },
            {
              id: 333,
              title: 'ኀበ ቀራንዮ',
              artist: 'Traditional',
              cover_url: require('../assets/images/misgana.jpg'),
              audio_url: require('../assets/music/Habe_Keranyo.opus'),
              duration: 180,
              genre: 'ግእዝ 1',
              lyrics: [
                { timestamp: 0, text: 'ኀበ ቀራንዮ ደብረ መድኃኒት(2) ቀራንዮ(2)ኀበ ቀራንዮ(2)' },
                { timestamp: 30, text: 'የመስቀሉ ቃል ለእኛ የእግዚአብሔር ኃይል ነው(2) ለማያምኑት ሞኝነት ነው ለእኛ ግን ሕይወት ነው(2)' },
                { timestamp: 60, text: 'እንመሰክራለን ፈጣሪያችን አለ እንመሰክራለን አማኑኤል አለ (2)' },
                { timestamp: 90, text: 'እንመነው አንካደው አማኑኤል ቸር ነው(2)' },
                { timestamp: 120, text: 'እንመሰክራለን ድንግል አማላጅነት እንመሰክራለን ማርያም አማላጅ ናት(2)' },
                { timestamp: 150, text: 'እንመናት አንካዳት የአምላክ እናት ናት(2)' }
              ],
            },
            {
              id: 334,
              title: 'ቤተክርስቲያን ባሕረ ጥበባት',
              artist: 'Traditional',
              cover_url: require('../assets/images/misgana.jpg'),
              audio_url: require('../assets/music/Betekirstiyane_Bayretibebat.opus'),
              duration: 160,
              genre: 'ግእዝ 1',
              lyrics: [
                { timestamp: 0, text: 'ቤተክርስቲያን ባሕረ ጥበባት(2) አትመረመርም(2)እጅግ ጥልቅ ናት (2)' },
                { timestamp: 30, text: 'በሥጋዊ ጥበብ ለማየት ሲቃጣ እምነት መነጽሩን ይዞ ስላልመጣ(2) አንዳንዱ በክህደት(2) ፈጣሪውን አጣ (2)' },
                { timestamp: 70, text: 'እንመሰክራለን ፈጣሪያችን አለ እንመሰክራለን አማኑኤል አለ (2) አንዳንዱ ቢክደው(2) እየተታለለ(2)' },
                { timestamp: 110, text: 'እንመሰክራለን ድንግል አማላጅ ናት እንመሰክራለን ማርያም አማላጅ ናት(2) ወላዲተ አምላክ(2) መሠረተ ሕይወት(2)' }
              ],
            },
            {
              id: 335,
              title: 'የኃያላን ኃያል',
              artist: 'Traditional',
              cover_url: require('../assets/images/misgana.jpg'),
              audio_url: require('../assets/music/Yehayalan_Hayal.opus'),
              duration: 240,
              genre: 'ግእዝ 1',
              lyrics: [
                { timestamp: 0, text: 'የኃያላን ኃያል(3) ልዑል እግዚአብሔር(2) ተአምራተ ብዙ በሰማይ (2) በምድር(2)' },
                { timestamp: 40, text: 'ለአብና ለወልድ (2)ለመንፈስ ቅዱስ (2) መስገድ ይገባናል በሥጋ(2)በነፍስ(2)' },
                { timestamp: 80, text: 'ለእግዝእትነ ማርያም(3)ለአምላክ እናት(2) መስገድ ይገባናል የፀጋ(2) ስግደት (2)' },
                { timestamp: 120, text: 'ለመላእክት አለቃ(3) ለቅዱስ ሚካኤል መስገድ ይገባናል የጸጋ(2) ስግደት(2)' },
                { timestamp: 160, text: 'ለአብሳሪው ትስበይት(3) ለቅዱስ ገብርኤል መስገድ ይገባናል የጸጋ(2) ስግደት(2)' },
                { timestamp: 200, text: 'ለመጥምቀ መለኮት(3) ለቅዱስ ዮሐንስ መስገድ ይገባናል የጸጋ(2) ስግደት(2)' }
              ],
            },
            {
              id: 336,
              title: 'አማን በአማን አማኑኤል ተመስገን',
              artist: 'Traditional',
              cover_url: require('../assets/images/misgana.jpg'),
              audio_url: require('../assets/music/Aman_Beaman.opus'),
              duration: 220,
              genre: 'ግእዝ 1',
              lyrics: [
                { timestamp: 0, text: 'አማን በአማን(4)አማኑኤል ተመስገን ለዚህ ፍቅር ምን ልክፈልህ (2)' },
                { timestamp: 30, text: 'ድብቁን ኃጢአት አንተ ብትገልጠው ይቅር ብለኸኝ ባትሸፋፍነው' },
                { timestamp: 60, text: 'እንደ ሰው በደል ቢቆጥር ጌታ ለእኔስ ኃጢአት የለውም ቦታ' },
                { timestamp: 90, text: 'በየደቂቃው ኃጢአት ስሠራ ስሠርቅ ስበድል አንተን ሳልፈራ' },
                { timestamp: 120, text: 'አንተ ግን ፊትህ ምንም ቢቀየም በቁጣህ በትር አልገረፍከኝም' },
                { timestamp: 150, text: 'የኃጢአት ጉዞ ጣፋጭ ቢመስልም ውጤቱ መርሮ ፍጹም አይጥምም' },
                { timestamp: 180, text: 'እንደ በደሌ ስላልከፈልከኝ ተመስገን እንጂ ሌላ ምን አለኝ' },
                { timestamp: 200, text: 'ምህረትህን ልከህ አድነኝ ዛሬ ታክቶኛልና በኃጢአት መኖሬ ዓለም በኃጢአት እየሳበችኝ በክንድህ ጥላ መኖር አቃተኝ' }
              ],
            },
            {
              id: 337,
              title: 'ንሴብሖ ለሥላሴ',
              artist: 'Traditional',
              cover_url: require('../assets/images/misgana.jpg'),
              audio_url: require('../assets/music/Nisebo_Lesilase.opus'),
              duration: 260,
              genre: 'ግእዝ 1',
              lyrics: [
                { timestamp: 0, text: 'ንሴብሖ ለሥላሴ(2) ክበር ተመስገን አምላከ ሙሴ(2)' },
                { timestamp: 30, text: 'የእኛ አማላጅ እናታችን(2) ነይ ነይ ወደኛ እመቤታችን ፈጥነች ተገኚ መሃከላችን(2)' },
                { timestamp: 70, text: 'ና ወደኛ ሚካኤል(2) መልአከ ምክሩ ለልዑል ከእግራችን ይውደቅ ሳጥናኤል' },
                { timestamp: 110, text: 'ና ወደኛ ገብርኤል(2) ከእሳቱ አውጣን ከነበልባል በክንፍህ ጥላ እንከለል' },
                { timestamp: 150, text: 'ና ወደኛ ኡራኤል (2) እንደ ቅዱስ ዕዝራ ሱቱኤል ጥበብን ስጠን ማስተዋል' },
                { timestamp: 190, text: 'ና ወደኛ በፈረስ(2) የልዳው ፀሐይ ጊዮርጊስ ገድልህን ሰምተን እንፈወስ' },
                { timestamp: 230, text: 'ና ወደኛ ተክለሃይማኖት(2) ይጠብቀን ያንተ ጸሎት ጸንተን እንድንቆም በሃይማኖት(2)' }
              ],
            },
            {
              id: 338,
              title: 'የጠሩሽ አንቺን ተማጽነው',
              artist: 'Traditional',
              cover_url: require('../assets/images/misgana.jpg'),
              audio_url: require('../assets/music/Desalate.opus'),
              duration: 240,
              genre: 'ግእዝ 1',
              lyrics: [
                { timestamp: 0, text: 'የጠሩሽ አንቺን ተማጽነው የዳኑብሽ የበላኤ ሰብእ እመቤት የአምላክ እናት' },
                { timestamp: 30, text: 'ድንግል አዛኝት ማርያም ቅድስት' },
                { timestamp: 60, text: 'በቃል ኪዳንሽ ብዙዎች ድነዋል በምልጃሽ ጽድቅን አግኝተዋል የአምላክ ቸርነቱን አይተዋል(2)' },
                { timestamp: 90, text: 'የእሳት ባሕር በአንቺ ተሻግረዋል የሰይጣንን ጦር በአንቺ ድል ነስተዋል ለሰማያዊ ክብር በቅተዋል(2)' },
                { timestamp: 120, text: 'ነፍሳቸውም ጽድቅን አግኝታለች ሕይወታቸውም በአንቺ ትድናለች ድንግል ሆይ አትጣይን ስላለች(2)' },
                { timestamp: 150, text: 'እኔም በአንቺ እታመናለሁ የአምላክ እናት አትርሺኝ እላለሁ በአማላጅነትሽ እድናለሁ(2)' },
                { timestamp: 180, text: 'እኛም በአንቺ እንታመናለን የአምላክ እናት አሳስቢ እንላለን በአማላጅነትሽ እንድናለን(2)' },
                { timestamp: 210, text: 'ምእመናንም በአንቺ ያምናሉ የአምላክ እናት አሳስቢ ይላሉ በአማላጅነትሽ ይድናሉ(2)' }
              ],
            },
            {
              id: 339,
              title: 'ደስ ይበለን',
              artist: 'Traditional',
              cover_url: require('../assets/images/misgana.jpg'),
              audio_url: require('../assets/music/Des_yibelen_amlak_ale_edited.opus'),
              duration: 200,
              genre: 'ግእዝ 1',
              lyrics: [
                { timestamp: 0, text: 'ደስ ይበለን(2) አምላክ አለ መሃላችን ምን ልክፈልህ ለዚህ ሥራ ገናና ነው አምላክ ክብርህ' },
                { timestamp: 30, text: 'ምሕረቱን አይተናልና አድርሶናል አምላክ በጤና' },
                { timestamp: 60, text: 'ይህችን ዕድሜ የጨመረልን ለንስሐ ጊዜ የሰጠን' },
                { timestamp: 90, text: 'ኃጢአትን ይታገስሃል በቸርነት አምላክ ያይሃል ደስታ ነው በሰማያት በአንድ ኃጥእ የጽድቅ ሕይወት' },
                { timestamp: 130, text: 'እልል በሉ የጎበኛችሁ በምሕረቱ አምላክ ያያችሁ በችግር ቀን ያሰበን ሁሉ አመስግኑ ዝም አትበሉ' },
                { timestamp: 170, text: 'ድንግል ማርያም ትጸልያለች ኃጥኡን ሰው ማረው እያለች በድንግል ክብር እንኖራለን በጽኑ ፍቅር አንዴ እንዲያድነን' }
              ],
            },
            {
              id: 340,
              title: 'እልል እልል ደስ ይበለን',
              artist: 'Traditional',
              cover_url: require('../assets/images/misgana.jpg'),
              // audio_url: require('../assets/music/Bemidrawi_Hiwot_Yeserg.opus'),
              duration: 180,
              genre: 'ግእዝ 1',
              lyrics: [
                { timestamp: 0, text: 'እልል(3)ደስ ይበለን ሁላችን አምላካችን መልካም አደረገልን ደስም አለን(2)' },
                { timestamp: 30, text: 'የሠራዊት ጌታ ክበር ተመስገን ልመናን ይሰማል እልል እግዚአብሔር ይራዳል' },
                { timestamp: 60, text: 'በመንገድም አንወድቅም እልል እርሱ ያነሳናል እግዚአብሔር ኃያል ነው እልል እርሱ ያሸንፋል' },
                { timestamp: 90, text: 'ጌታ ከእኛ ጋር ነው እልል በገና ደርድሩ እልል እግዘአብሔር ይመስገን እልል' },
                { timestamp: 120, text: 'ድንቅ ነው ተግባሩ እልል ኃጢአታችን ሁሉ እልል ተደመሰሰልን እልል' },
                { timestamp: 150, text: 'ሕይወታችን ውስጥ እልል አምላክ ነገሠልን እልል' }
              ],
            }
          ]
        },
        {
          id: 'yemsgana_mezmurat_geez_2',
          name: 'ግእዝ 2',
          image: require('../assets/images/misgana.jpg'), 
          songs: [
              {
                id: 341,
                title: 'ከክርስቶስ ፍቅር',
                artist: 'Traditional',
                cover_url: require('../assets/images/misgana.jpg'),
                // audio_url: 'TODO: add local file for song id 341',
                duration: 190,
                genre: 'ግእዝ 2',
                lyrics: [
                  { timestamp: 0, text: 'ከክርስቶስ ፍቅር የሚለየኝ ማነው(2) መከራ ችግር ስቃይ ወይስ መራቆት ነው(2)' },
                  { timestamp: 30, text: 'አንፈራም አንሰጋም አንጠራጠርም(2) እግዚአብሔር ከእኛ ጋራ ይኖራል ለዘለዓለም(2)' },
                  { timestamp: 60, text: 'የሰማይ ቤታችን አማኑኤል የሠራው(2) ግንቡ ንጹሕ ውኃ መሠረቱ ደም ነው(2)' },
                  { timestamp: 90, text: 'ሳይነጋ ተራምደን እንግባ በጠዋት(2) በደሙ መሥርቶ ከሠራልን ቤት(2)' },
                  { timestamp: 120, text: 'ከቶ የት ይገኛል እንዲህ ያለ ቤት(2) የውኃ ግድግዳ የደም መሠረት(2)' },
                  { timestamp: 150, text: 'የውኃ ግድግዳ የደም መሠረት(2) ይኸው እዚህ አለ የአማኑኤል ቤት (2)' }
                ],
              },
              {
                id: 342,
                title: 'አማልደን ስንልህ',
                artist: 'Traditional',
                cover_url: require('../assets/images/misgana.jpg'),
                // audio_url: 'TODO: add local file for song id 342',
                duration: 230,
                genre: 'ግእዝ 2',
                lyrics: [
                  { timestamp: 0, text: 'አማልደን ስንልህ ስማን እዘንልን(2) አጽናን አረጋጋህን(2) ገብርኤል የእኛ መመኪያ አባታችን' },
                  { timestamp: 35, text: 'እግዚአብሔር ራሱ ክብርን አቀዳጅቶህ ለተልዕኮ እንድትፈጥን አድርጎ የሾመህ' },
                  { timestamp: 60, text: 'እንደ ሦስቱ ሕጻናት አንተን እንደ ጠሩት ዛሬም አውጣን ገብርኤል ሆይ ከነፍሳችን ጠላት' },
                  { timestamp: 85, text: 'እምነት አለን እያልን የቀና ምግባር እባክህን ሊቀ መላእክት እንዳንስት ርዳን' },
                  { timestamp: 110, text: 'መላእክትን ሁሉ ያረጋጋሃቸው አንተ እኮ ነህ ኃያል መልአክ ጽኑ ቁሙ ያልካቸው' },
                  { timestamp: 135, text: 'እኛስ እናምናለን በአማላጅነትህ በተሰጠህ ጸጋ ኃይላችን አንተ ነህ' },
                  { timestamp: 160, text: 'የምሥራች መልአክ ተብለሃልና ደስ አሰኘን ሰላም ስጠን ተጨንቀናልና' },
                  { timestamp: 185, text: 'ኢትዮጵያንም ታደግ ተዋሕዶንም ጠብቅ ሊቀ መላእክት በል ቁምልን ሰይፍን ታጠቅ' },
                  { timestamp: 210, text: 'ሠራዊትህ ከበው እነርሱ ያጽናኑን ዘወትር ሳትርቀን ሰላምን ለግሠን' }
                ],
              }
          ]
        },
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CATEGORY 6
    // ═══════════════════════════════════════════════════════
    {
      id: 'yekuskuam_mezmur',
      name: 'የቁስቋም መዝሙራት',
      icon: require('../icons/playlist.png'),
      color: '#cfd145',
      image: require('../assets/images/kuskuam.jpg'), 
      subcategories: [
        {
          id: 'yekuskuam_sub_1',
          name: 'እዝል ዓራራይ ቅኝት',
          image: require('../assets/images/kuskuam.jpg'), 
          songs: [
            {
              id: 343,
              title: 'እምነ እምነ ንኢ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/kuskuam.jpg'),
              audio_url: require('../assets/music/Emne_Emne_Ni.opus'),
              duration: 140,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'እምነ እምነ ንኢ (2)' },
                { timestamp: 5, text: 'በሰላም (2) ንኢ ማርያም' },
                { timestamp: 10, text: 'ትርጉም ፦ እናታችን ነይ ነይ (2)' },
                { timestamp: 15, text: 'በሰላም (2) ነይ ማርያም' }
              ],
            },
            {
              id: 344,
              title: 'ርሀበ ውጽምአ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/kuskuam.jpg'),
              audio_url: require('../assets/music/Rihabe_Wesima.opus'),
              duration: 150,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ርሀበ ውጽምአ አዘክሪ ድንግል ርሀበ ውጽምአ(2)' },
                { timestamp: 5, text: 'ምንዳቤ ወሐዘነ አዘክሪ ድንግል(2)' },
                { timestamp: 10, text: 'ትርጉም ፦ ድንግል ሆይ ርሀብና መጠማቱን አሳስቢ' }
              ],
            },
            {
              id: 345,
              title: 'ተፈጸመ ማሕሌተ ጽጌ ቁ 1',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/kuskuam.jpg'),
              audio_url: require('../assets/music/Tefeseme_Mahlete_Tsege.opus'),
              duration: 130,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ተፈጸመ ማሕሌተ ጽጌ(2)' },
                { timestamp: 5, text: 'ማሕሌተ ጽጌ (2) ተፈጸመ ማሕሌተ ጽጌ' },
                { timestamp: 10, text: 'ትርጉም ፦ የጽጌው ማሕሌት ተፈጸመ' }
              ],
            },
            {
              id: 346,
              title: 'ደስ ይበልሽ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/kuskuam.jpg'),
              audio_url: require('../assets/music/Des_Yibelsh.opus'),
              duration: 320,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ደስ ይበልሽ (2) ማርያም ቅድስት ድንግል(2)' },
                { timestamp: 5, text: 'ደስ ይበልሽ ከሴቶቹ ሁሉ የተባረክሽ ነሽ(2)' },
                { timestamp: 10, text: 'ሰላም እልሻለሁ ማርያም ድንግል' },
                { timestamp: 15, text: 'እንደ ብሥራታዊው እንደ ገብርኤል' },
                { timestamp: 20, text: 'ለአንቺ የተሰጠሽ ሁለት ድንግልና' },
                { timestamp: 25, text: 'አንደኛው በሥጋ ሌላው በኀሊና' },
                { timestamp: 30, text: 'ከዓለም ሁሉ ሴቶች ንጽሕት በመሆንሽ' },
                { timestamp: 35, text: 'ሰማያዊ ምሥጢር የተገለፀልሽ' },
                { timestamp: 40, text: 'ለልዑል ማደሪያ ለመሆን ያበቃሽ' },
                { timestamp: 45, text: 'የጌታችን እናት በጣም ደስ ይበልሽ' },
                { timestamp: 50, text: 'የተነበየላት ሕዝቅኤል ነቢዩ' },
                { timestamp: 55, text: 'የተዘጋችው በር ብሎ በራዕዩ' },
                { timestamp: 60, text: 'ሳይከፍት ገብቶ ወጣ የሠራዊት ጌታ' },
                { timestamp: 65, text: 'ደግሞ ከዚያ በኋላ ኖራለች ተዘግታ' },
                { timestamp: 70, text: 'ማርያም ስትጎበኛት ወደ ቤቷ ገብታ' },
                { timestamp: 75, text: 'ኤልሳቤት ዘመረች በመንፈስ ተሞልታ' },
                { timestamp: 80, text: 'በማህፀኗ ያለው ዘለለ በደስታ' },
                { timestamp: 85, text: 'እኛንም ትጎብኘን ከጠዋት እስከ ማታ' }
              ],
            },
            {
              id: 347,
              title: 'ማርያም ሥነ ተክለ ጽጌ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/kuskuam.jpg'),
              audio_url: require('../assets/music/Maryamsine_Teklesige.opus'),
              duration: 180,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ማርያም ሥነ ተክለ ጽጌ ኸኸ ሥነ ተክለ ጽጌ (2)' },
                { timestamp: 5, text: 'ከመ ጽጌረዳ (3) ድንግል ዘሰሎሞን ሀርጌ' },
                { timestamp: 10, text: 'ትርጉም ፦ ማርያም የአበባ ተክል ነሽ ውበትሽም' },
                { timestamp: 15, text: 'የጽጌረዳ ነው የሰሎሞንም ሀርጌ ነሽ' }
              ],
            },
            {
              id: 348,
              title: 'መዓዛሆሙ ለቅዱሳን',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/kuskuam.jpg'),
              audio_url: require('../assets/music/Dengil_Amaljin.opus'),
              duration: 170,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'መዓዛሆሙ ለቅዱሳን ከመጽጌ ደንጎላት ዘውስተ ቆላት(2)' },
                { timestamp: 5, text: 'ጸገዩ ቀንሞስ ምስለ ናርዶስ (2)' },
                { timestamp: 10, text: 'ትርጉም፦ የቅዱሳን መአዛቸው እንደ ጽጌ ሃይማኖታቸው እንደ ሱፍ አበባ እንደ ቀኒሞስ እንደ ናርዶስም ነው።' }
              ],
            },
            {
              id: 349,
              title: 'መዓዛ አፈዋት',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/kuskuam.jpg'),
              audio_url: require('../assets/music/Meaza_Afewat.opus'),
              duration: 160,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'መዓዛ አፈዋት ማርያም (2) ጽጌ መንግሥት ቡርክት(2)' },
                { timestamp: 5, text: 'ጽጌ (2) ዘሰሎሞን ወዳዊት አብርሃ ወአጽብሃ(2)' },
                { timestamp: 10, text: 'ትርጉም ፦' }
              ],
            },
            {
              id: 350,
              title: 'እስከ ማእዜኑ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/kuskuam.jpg'),
              audio_url: require('../assets/music/Eskemazenu.opus'),
              duration: 160,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'እስከ ማእዜኑ እግዝእትየ ውስተ ምድረ ነኪር ትሄልዊ(2)' },
                { timestamp: 5, text: 'ገሊላ እትዊ (4) ሀገርኪ ገሊላ እትዊ(2)' },
                { timestamp: 10, text: 'ትርጉም እስከመቼ ድረስ እመቤቴ ሆይ በባእድ ሃገር ትኖሪያለሽ(2)' },
                { timestamp: 15, text: 'ገሊላ ግቢ (4) ሀገርሽ ገሊላ ግቢ(2)' }
              ],
            },
            {
              id: 351,
              title: 'በከመ ይቤ ሰሎሞን',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/kuskuam.jpg'),
              audio_url: require('../assets/music/Bekeme_Yibe.opus'),
              duration: 145,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'በከመ ይቤ ሰሎሞን (2) በእንተ ማርያም(2)' },
                { timestamp: 5, text: 'ንዑ ንትፈጋዕ ወኢይልትፈ ጽጌ ደመና አብርሃ በሥነ ማርያም' },
                { timestamp: 10, text: 'ትርጉም ፦' }
              ],
            },
            {
              id: 352,
              title: 'ብኪ ይትፌስሑ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/kuskuam.jpg'),
              audio_url: require('../assets/music/Maryam_Niset.opus'),
              duration: 155,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ብኪ ይትፌስሑ ዘገነተ ጽጌ ፃድቃን(2)' },
                { timestamp: 5, text: 'እለተ ብርሃን (4) ማርያም እለተ ብርሃን' },
                { timestamp: 10, text: 'ትርጉም ፦ የእለት ብርሃናቸው ማርያም በገነት ያሉ ፃድቃን ባንቺ ደስ ይላቸዋል' }
              ],
            },
            {
              id: 353,
              title: 'ሰሎሞን ይቤላ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/kuskuam.jpg'),
              audio_url: require('../assets/music/Solomon_Yibela.opus'),
              duration: 130,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ሰሎሞን ይቤላ(2) ለማርያም(2)' },
                { timestamp: 5, text: 'አዕይንትኪ ዘርግብ አዕይንትኪ (2) ሰሎሞን ይቤላ(2)' },
                { timestamp: 10, text: 'ትርጉም ፦ ሰሎሞን ዐይኖችሽ የርግብ ናቸው ይላታል' }
              ],
            },
            {
              id: 354,
              title: 'ንግስት ሰማያት',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/kuskuam.jpg'),
              audio_url: require('../assets/music/Nigste_Semayatwemider.opus'),
              duration: 140,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ንግሥት ሰማያት ወምድር ማርያም ድንግል(2)' },
                { timestamp: 5, text: 'ተፈጸመ (5) ማሕሌት ጽጌ(2)' },
                { timestamp: 10, text: 'ትርጉም ፦' }
              ],
            },
            {
              id: 355,
              title: 'ክበበ ጌራ ወርቅ ቁ 1',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/kuskuam.jpg'),
              audio_url: require('../assets/music/Kibebegera_Werke_1.opus'),
              duration: 125,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ክበበ (2) ጌራ ወርቅ(2)' },
                { timestamp: 5, text: 'አክሊለ ጽጌ ማርያም(4)' },
                { timestamp: 10, text: 'ትርጉም ፦' }
              ],
            },
            {
              id: 356,
              title: 'ክበበ ጌራ ወርቅ ቁ 2',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/kuskuam.jpg'),
              audio_url: require('../assets/music/Kibebe_Gera_Werke_2.opus'),
              duration: 135,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ክበበ ጌራ ወርቅ ጽሩይ እም እንቆባሕርይ(2)' },
                { timestamp: 5, text: 'ዘየሐቱ (5) እንቆባሕርይ(2)' },
                { timestamp: 10, text: 'ትርጉም ፦' }
              ],
            },
            {
              id: 357,
              title: 'እንዘ ተኃቅፊዩ ቁ 1',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/kuskuam.jpg'),
              audio_url: require('../assets/music/Enzetakfiyo_1.opus'),
              duration: 150,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'እንዘ ተኃቅፊዩ ለህፃንኪ ንኢ ማርያም' },
                { timestamp: 5, text: 'ንኢ (2) ማርያም' },
                { timestamp: 10, text: 'ትርጉም' },
                { timestamp: 15, text: 'ልጅሽን ታቅፈሽ እመቤቴ ሆይ ነይ ማርያም' },
                { timestamp: 20, text: 'ነይ (2) ማርያም' }
              ],
            },
            {
              id: 358,
              title: 'እንዘ ተኃቅፊዩ ቁ 2',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/kuskuam.jpg'),
              audio_url: require('../assets/music/Enzetakfiyo_2.opus'),
              duration: 120,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'እንዘ ተኃቅፊዩ ለህፃንኪ ድንግል(2)ክበበ ጌራ ወርቅ አክሊለ ጽጌ(2)' },
                { timestamp: 5, text: 'ትርጉም ፦' }
              ],
            }
           
          ],
          
        },
        {
          id: 'yekuskuam_sub_2',
          name: 'ግእዝ 1',
          image: require('../assets/images/kuskuam.jpg'), 
          songs: [
            {
              id: 359,
              title: 'ምዕረ በገቦኪ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/kuskuam.jpg'),
              audio_url: require('../assets/music/Mire_Begeboki.opus'),
              duration: 160,
              genre: 'ግእዝ 1',
              lyrics: [
                { timestamp: 0, text: 'ምዕረ በገቦኪ ወምዕረ በዘባንኪ' },
                { timestamp: 5, text: 'በኃዚለ ህፃን (4) ደከምኪ ማርያም ድንግል' },
                { timestamp: 10, text: 'ትርጉም' },
                { timestamp: 15, text: 'አንድ ጊዜ በጎንሽ አንድ ጊዜ በጀርባሽ' },
                { timestamp: 20, text: 'ልጅሽን ታቅፍሽ (4) ተንከራተትሽ ማርያም ድንግል' }
              ],
            },
            {
              id: 360,
              title: 'ከመ ጽጌ ሮማን',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/kuskuam.jpg'),
              audio_url: require('../assets/music/Keme_Tsige_Roman.opus'),
              duration: 140,
              genre: 'ግእዝ 1',
              lyrics: [
                { timestamp: 0, text: 'ከመ ጽጌ ሮማን ከመ ጽጌ' },
                { timestamp: 5, text: 'አበባዬ (2) ወላዲተ አምላክ ሲሳይ' },
                { timestamp: 10, text: 'ትርጉም፦' }
              ],
            },
            {
              id: 361,
              title: 'ትሕትናሽ ግሩም',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/kuskuam.jpg'),
              audio_url: require('../assets/music/Tihtnash_Girum.opus'),
              duration: 380,
              genre: 'ግእዝ 1',
              lyrics: [
                { timestamp: 0, text: 'ትሕትናሽ ግሩም ነው ደግነትሽም(2)' },
                { timestamp: 5, text: 'እናቱ ሆነሻል ለመድኃኔዓለም (2)' },
                { timestamp: 10, text: 'ንጽሕት ስለሆንሽ እመቤቴ እመቤቴ' },
                { timestamp: 15, text: 'እንከን የሌለብሽ እመቤቴ እመቤቴ' },
                { timestamp: 20, text: 'የፍጥረታት ጌታ እመቤቴ እመቤቴ' },
                { timestamp: 25, text: 'በአንቺ ያደረብሽ እመቤቴ እመቤቴ' },
                { timestamp: 30, text: 'የድንግል መመረጥ እመቤቴ እመቤቴ' },
                { timestamp: 35, text: 'ዜናው አስገረመኝ እመቤቴ እመቤቴ' },
                { timestamp: 40, text: 'እሳቱን ታቀፈች እመቤቴ እመቤቴ' },
                { timestamp: 45, text: 'የማይቻለውን እመቤቴ እመቤቴ' },
                { timestamp: 50, text: 'አዝ…..' },
                { timestamp: 55, text: 'ምርኩዜ ልበልሽ እመቤቴ እመቤቴ' },
                { timestamp: 60, text: 'ጥላ ከለላዬ እመቤቴ እመቤቴ' },
                { timestamp: 65, text: 'ጋሻዬ ነሽ አንቺ እመቤቴ እመቤቴ' },
                { timestamp: 70, text: 'ለኔ መመኪያዬ እመቤቴ እመቤቴ' },
                { timestamp: 75, text: 'በአለም እንዳልጠፋ እመቤቴ እመቤቴ' },
                { timestamp: 80, text: 'ሕይወቴ መሮብኝ እመቤቴ እመቤቴ' },
                { timestamp: 85, text: 'እንደ ወይን አጣፍጪው እመቤቴ እመቤቴ' },
                { timestamp: 90, text: 'ማርያም ድረሺልኝ እመቤቴ እመቤቴ' },
                { timestamp: 95, text: 'አዝ…..' },
                { timestamp: 100, text: 'የምሥራቅ ደጃፍ ነሽ እመቤቴ እመቤቴ' },
                { timestamp: 105, text: 'የሁላችን ተስፋ እመቤቴ እመቤቴ' },
                { timestamp: 110, text: 'እሙ ለፀሐየ ጽድቅ እመቤቴ እመቤቴ' },
                { timestamp: 115, text: 'የሁሉ ጠበቃ እመቤቴ እመቤቴ' },
                { timestamp: 120, text: 'ድንግል የድል አክሊል እመቤቴ እመቤቴ' },
                { timestamp: 125, text: 'ድንግል የጽድቅ ሥራ እመቤቴ እመቤቴ' },
                { timestamp: 130, text: 'ድንግል መሰላል ነሽ እመቤቴ እመቤቴ' },
                { timestamp: 135, text: 'የተዋሕዶ ተስፋ እመቤቴ እመቤቴ' }
              ],
            }
          ],
        },
        {
          id: 'yekuskuam_sub_3',
          name: 'ግእዝ 2',
          image: require('../assets/images/kuskuam.jpg'), 
          songs: [
            {
              id: 362,
              title: 'ተፈጸመ ማሕሌተ ጽጌ ቁ 2',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/kuskuam.jpg'),
              audio_url: require('../assets/music/Tefeseme_Mahlete_Tsege_2.opus'),
              duration: 130,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'ተፈጸመ ማሕሌተ ጽጌ ስሙር' },
                { timestamp: 5, text: 'ንግስተ ሰማይ (2) ወምድር' },
                { timestamp: 10, text: 'ትርጉም ፦ የሰማይ እና የምድር ንግሥት ሆይ የተወደደ የአበባ ምስጋናሽ ተፈጸመ' }
              ],
            }
          ]
        },
      ],
    },
    // ═══════════════════════════════════════════════════════
    // CATEGORY 7
    // ═══════════════════════════════════════════════════════
    {
      id: 'yebata_mezmur',
      name: 'የበዓታ ለማርያም መዝሙራት',
      icon: require('../icons/playlist.png'),
      color: '#d1b045',
      image: require('../assets/images/beata.png'), 
      subcategories: [
        {
          id: 'yebata_mezmur_sub1',
          name: 'እዝል ዓራራይ ቅኝት',
          image: require('../assets/images/beata.png'), 
          songs: [
            {
              id: 363,
              title: 'ኢያቄም ወሐና',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Eyakem_Wehana.opus'),
              duration: 180,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ኢያቄም ወሐና እናት አባትሽ ቤተ እግዚአብሔር ወስደው ስዕለት የሰጡሽ' },
                { timestamp: 5, text: 'መና ከሰማያት የወረደልሽ ፍጽምት ድንግል የሆንሽ ማርያም አንቺ ነሽ (2)' },
                { timestamp: 10, text: 'ኦ ወላዲተ አምላክ ማርያም(ድንግል) አንቺው ነሽ(2) ' }
              ],
            },
            {
              id: 364,
              title: 'ይዌድስዋ መላእክት',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Yiwedswa.opus'),
              duration: 165,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ይዌድስዋ መላእክት ለማርያም (2)' },
                { timestamp: 5, text: 'በውስተ ውሳጤ መንጦላዕት ወይብልዋ በሐኪ' },
                { timestamp: 10, text: 'ማርያም ሐዳስዩ ጣዕዋ(2)' },
                { timestamp: 15, text: 'ትርጉም፡- በመጋረጃ ውስጥ መላእክት ማርያም' },
                { timestamp: 20, text: 'ያመሰግኗታል ሐዲሲቷ እንቦሳ ሁይ ሠላምታ ይገባሻል እያሉ' }
              ],
            },
            {
              id: 365,
              title: 'ገብርኤል መልአክ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Gebrel_Mesa.opus'),
              duration: 155,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ገብርኤል መልአክ መጽአ ወዜነዋ(2)ዜነዋ' },
                { timestamp: 5, text: '(2)ለማርያም(2)' },
                { timestamp: 10, text: 'በዕንቈ ባሕርይ(2)እንዘ ትፈትል ወርቅ(2)' },
                { timestamp: 15, text: 'ትርጉም መልአኩ ገብርኤል መጥቶ ለእመቤታችን' },
                { timestamp: 20, text: 'ለማርያም ወርቅና ሐር አስማምታ ስትፈትል' },
                { timestamp: 25, text: 'አስረድቶ ነገራት' }
              ],
            },
            {
              id: 366,
              title: 'ክንፉ ጸለላ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Kinfu_Selela.opus'),
              duration: 120,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ክንፉ ጸለላ(3)' },
                { timestamp: 5, text: 'ተፈስሒ ለድንግል(ለማርያም) ይቤላ(2)' },
                { timestamp: 10, text: 'ትርጉም በክንፉ ጋርዳት(3)' },
                { timestamp: 15, text: 'ደስ ይበልሽ ድንግል ሆይ(ደስ ይበልሽ ሆይ) እያላት(2)' }
              ],
            },
            {
              id: 367,
              title: 'ኦ ድንግል',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/O_Dengile.opus'),
              duration: 210,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ኦ ድንግል አኮ በተላህዮ ዘልህቂ ከመ አዋልደ' },
                { timestamp: 5, text: 'ዕብራዊያን እለ ያገዝፋ ክሳዶን(2)' },
                { timestamp: 10, text: 'አላ በቅድስና ወበንጽሕ ውስተ ቤተ መቅደስ' },
                { timestamp: 15, text: 'ነበርኪ ውስተ ቤተ መቅደስ (2)' },
                { timestamp: 20, text: 'ትርጉም ድንግል ሆይ አንገታቸውን' },
                { timestamp: 25, text: 'እንደሚያገዝፉ እንደ ዕብራዊያን ሴቶች ልጆች' },
                { timestamp: 30, text: 'በዋዛ በፈዛዛ ያደግሽ አይደለሽም በንጽሕና' },
                { timestamp: 35, text: 'በቅድስና በቤተ መቅደስ ውስጥ ኖርሽ እንጂ' }
              ],
            },
            {
              id: 368,
              title: 'ማኀደረ መለኮት',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Mahdere_Melekot.opus'),
              duration: 130,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ማኀደረ መለኮት(2)' },
                { timestamp: 5, text: 'ማርያም እመ ብዙሐን(2)' },
                { timestamp: 10, text: 'ትርጉም ማርያም የብዙሐን እናት የመለኮት' },
                { timestamp: 15, text: 'ማደሪያ ነሽ' }
              ],
            },
            {
              id: 369,
              title: 'የኪዳን ጽላት',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Yekidan_Silat.opus'),
              duration: 145,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'የኪዳን ጽላት የተሰወረ መና ያለብሽ ደብተራ' },
                { timestamp: 5, text: 'ድንኳን አንቺ ነሽ(2)' },
                { timestamp: 10, text: 'ይኸውም መና የተባለው(2)በድንግል ማርያም' },
                { timestamp: 15, text: 'ያደረው የእግዚአብሔር አብ ልጁ ነው(2)' }
              ],
            },
            {
              id: 370,
              title: 'በጽሐ ሠናይ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Besa_Senay.opus'),
              duration: 220,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'በጽሐ ሠናይ ወአልጸቀ ዘመን(2)ወበዓላ ለቅድስት ማርያም (2)' },
                { timestamp: 5, text: 'እንተ በላዕሌሃ ተመርዓ ወቃል አንጺሖ ሥጋሃ ላዕሌሃ ኀደረ (2)' },
                { timestamp: 10, text: 'ትርጉም ቃል ሥጋዋን አንጽቶ ያደረባትና' },
                { timestamp: 15, text: 'የተሞሸረባት የቅድስት ድንግል ማርያም የክብረ በዓሏ ዘመን ወቅት በሰላም ደረሰ ገባ' }
              ],
            },
            {
              id: 371,
              title: 'ማርያም ተዓቢ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Maryam_Teabi.opus'),
              duration: 140,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ማርያም ተዓቢ እምኩሉ ፍጥረት(2)' },
                { timestamp: 5, text: 'ኢያውእያ እሳተ መለኮት(2)' },
                { timestamp: 10, text: 'ትርጉም ማርያም ትበልጣለሽ ከሁሉ ፍጥረታት(2)' },
                { timestamp: 15, text: 'አላቃጠላትም የመለኮት እሳተ(2)' }
              ],
            },
            {
              id: 372,
              title: 'ማርያም ፊደል',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Maryam_Fidel.opus'),
              duration: 125,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ማርያም ፊደል የሁሉ መማርያ(2)' },
                { timestamp: 5, text: 'በንጽሕና(2)ተጽፋለችና(2)' }
              ],
            },
            {
              id: 373,
              title: 'ድንግል አማልጂን',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Dengil_Amaljin.opus'),
              duration: 140,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ድንግል አማልጂን ከአምላካችን (2)' },
                { timestamp: 5, text: 'እንዳንጠፋ በነፍስም በሥጋችን አደራ ድንግል' },
                { timestamp: 10, text: 'ጠብቂን ልጆችሽን(2)' }
              ],
            },
            {
              id: 374,
              title: 'ልቤን አነሳስቶ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Liben_Anesasto.opus'),
              duration: 135,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ልቤን አነሳስቶ ያመለክተኛል የአምላክን እናት' },
                { timestamp: 5, text: 'እመናት ይለኛል(2)' },
                { timestamp: 10, text: 'እመን(4)የአምላክን እናት አዛኝቷን (2)' }
              ],
            },
            {
              id: 375,
              title: 'መሰንቆሁ ለዳዊት',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Mesenkohu_Ledawite.opus'),
              duration: 150,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'መሰንቆሁ ለዳዊት ወአክሊሎ ለሰሎሞን(2)' },
                { timestamp: 5, text: 'ሕትምት ገነት እጹት አዘቅት ሕትምት(2)' },
                { timestamp: 10, text: 'ትርጉም፡- የዳዊት መሰንቆ የሰሎሞን አክሊል' },
                { timestamp: 15, text: 'የተዘጋች ገነት የታተመች ጉድጓድ አንቺ ነሽ (2)' }
              ],
            },
            {
              id: 376,
              title: 'ማርያም ንጽሕይት',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Maryam_Niset.opus'),
              duration: 200,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ማርያም ንጽሕይት ድንግል ማእመንት ወላዲተ' },
                { timestamp: 5, text: 'አምላክ ሰአሊተ ምሕረት ለውሉደ ሰብእ(2)' },
                { timestamp: 10, text: 'ሰአሊ ለነ ኀበ ክርስቶስ ወልድኪ ይስረይ' },
                { timestamp: 15, text: 'ኃጢአተነ ሰአሊ ለነ ቅድስት(2)' },
                { timestamp: 20, text: 'ትርጉም ማርያም ንጽሕይት ድንግል ታማኝ' },
                { timestamp: 25, text: 'አምላክ የወለድሽ የምሕረት አማላጅ ለሰው ልጆች(2)' },
                { timestamp: 30, text: 'ለምኝልን ከልጅሽ ከክርስቶስ ይቅር እንዲለን' },
                { timestamp: 35, text: 'ቅድስት ሆይ ለምኝልን(2)' }
              ],
            },
            {
              id: 377,
              title: 'እመቤታችን ማርያም',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Emebetach_Maryame.opus'),
              duration: 160,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'እመቤታችን ማርያም ሀገራችንን ጠብቂልን በምልጃሽ(2)' },
                { timestamp: 5, text: 'ከመናፍቃን ከከሃድያን ከጠላት ሰይጣን ሰውረሽ' },
                { timestamp: 10, text: 'እንድጠብቂያት በምልጃሽ(2)' }
              ],
            },
            {
              id: 378,
              title: 'ከደመና በታች',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Kedemena_Betach.opus'),
              duration: 130,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ከደመና በታች እንዳይቀር ጸሎቴ(2)' },
                { timestamp: 5, text: 'አሳርጊው(3)ድንግል እመቤቴ(2)' }
              ],
            },
            {
              id: 379,
              title: 'ኦ ርኅርኅተ ሕሊና',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/O_Rerite_Hilina.opus'),
              duration: 200,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ኦ ርኅርኅተ ሕሊና ወአፍቅሮተ ሰብእ ልማዳ(2)' },
                { timestamp: 5, text: 'ለእለ ጌሠሙ(4)ትመስል(3)እንግዳ(2)' },
                { timestamp: 10, text: 'ማርያም ሆይ ሰውን የምትወጅ(2)' },
                { timestamp: 15, text: 'ዕለት (8)እንግዳ(2)ትመስያለሽ (2)' }
              ],
            },
            {
              id: 380,
              title: 'ምሥራቀ ምሥራቃት',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Misrake_Misrakat.opus'),
              duration: 140,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ምሥራቀ ምሥራቃት ሙጽሐ ፀሐይ እግዝእትነ ዘመና ሙዳይ(2)' },
                { timestamp: 5, text: 'ዘመና ሙዳይ ማርያም ዘመና ሙዳይ (2)' },
                { timestamp: 10, text: 'ትርጉም፡- የፀሐይ መውጫዎች መውጫ' },
                { timestamp: 15, text: 'እመቤታችን መና ያለባት ሙዳይ ናት' }
              ],
            },
            {
              id: 381,
              title: 'መሐርኒ ድንግል',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Mehareni_Dingel.opus'),
              duration: 240,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'መሐርኒ ድንግል ወተሰሃልኒ በበዘመኑ' },
                { timestamp: 5, text: 'ለእመ መሐርክኒ አንቲ ዘይኮንነኒ መኑ(2)' },
                { timestamp: 10, text: 'ኮናኔ ሥጋ ወነፍስ(3)ወልድኪ አኮኑ(2)' },
                { timestamp: 15, text: 'ትርጉም ማሪኝ ድንግል ማርያም ይቅርም በይኝ በየዘመኑ(2)' },
                { timestamp: 20, text: 'ድንግል(እናቴ) ሆይ ከማርሽኝ(2)ልጅሽ አይፈርድብኝ(2)' },
                { timestamp: 25, text: 'የሥጋ የነፍስ ፈራጅ(3)ልጅሽ አይደለም ሆይ(2)' }
              ],
            },
            {
              id: 382,
              title: 'ታማልደናለች',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Tamaldenalch.opus'),
              duration: 120,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ታማልደናለች (2)' },
                { timestamp: 5, text: 'ማርያም(2)ቤዛዊት ዓለም(2)' }
              ],
            },
            {
              id: 383,
              title: 'ምስለ ሚካኤል ወገብርኤል',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Mislemikael_Wegebrel.opus'),
              duration: 160,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ምስለ ሚካኤል ወገብርኤል ንዒ ሠናይትየ ማርያም(2)' },
                { timestamp: 5, text: 'ንዒ(8)እመ አምላክ ንዒ ማርያም(2)' },
                { timestamp: 10, text: 'ትርጉም መልካሚቷ የአምላክ እናት ማርያም' },
                { timestamp: 15, text: 'ሆይ ከሚካኤል ከገብርኤል ጋር ነይ' }
              ],
            },
            {
              id: 384,
              title: 'ጽላት ዘሙሴ ጽላት',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Tsilat_Zemuse.opus'),
              duration: 155,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ጽላት ዘሙሴ ጽላት(2)' },
                { timestamp: 5, text: 'ጽላት ዘሙሴ ጽላት(2) ዘሙሴ ጽላት(2)' },
                { timestamp: 10, text: 'ሙሴ ከፈጣሪ የተረከባት' },
                { timestamp: 15, text: 'አሥርቱ ትእዛዛት የተጻፉባት' },
                { timestamp: 20, text: 'ጽላት ዘሙሴ ጽላት' },
                { timestamp: 25, text: 'ይእቲ ዕፀ መድኃኒት(2)' },
                { timestamp: 30, text: 'ይእቲ ዕፀ መድኃኒት(2)ማርያም ቅድስት(2)' }
              ],
            },
            {
              id: 385,
              title: 'ሰአሊ ለነ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Seali_Lene_2.opus'),
              duration: 140,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ሰአሊ ለነ ማርያም ሰአሊ ለነ (2)' },
                { timestamp: 5, text: 'አክሊለ ንጹሐን(2)ሰአሊ ለነ (2)' },
                { timestamp: 10, text: 'ለምኝልን ማርያም ለምኝልን (2)' },
                { timestamp: 15, text: 'የንጽሐን አክሊል(2)ለምኚልን(2)' }
              ],
            },
            {
              id: 386,
              title: 'መሠረተ ሕይወት',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Meserete_Hiwot.opus'),
              duration: 170,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'መሠረተ ሕይወት ማርያም ወጥንተ መድኃኒት ዘእምቀዲሙ(2)' },
                { timestamp: 5, text: 'ለወልድኪ(2)አምሳለ ደሙ(2)' },
                { timestamp: 10, text: 'ትርጉም ቅድመ ዓለም የነበረ መድኃኒት ከሚባል የተገኘሽ የሕይወት መሠረት ማርያም አንቺ ነሽ' },
                { timestamp: 15, text: 'መሠረትነትሽም የልጅሽ የደሙ ምሳሌ ነው' }
              ],
            },
            {
              id: 387,
              title: 'አንቺ ነሽ ተስፋው',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Anchiw_Nesh_Tesfaw.opus'),
              duration: 135,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'አንቺ ነሽ ተስፋው ለአዳም ኪዳነ ምሕረት(2)' },
                { timestamp: 5, text: 'በተሰደደ ጊዜ ከገነት በተሰደደ ጊዜ(2)' }
              ],
            },
            {
              id: 388,
              title: 'እምነ እምነ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Emne_Emne_Ni.opus'),
              duration: 125,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'እምነ እምነ ንኢ (2)' },
                { timestamp: 5, text: 'በሰላም(2)ንኢ ማርያም(2)' },
                { timestamp: 10, text: 'እናታችን ነይ ነይ(2)' },
                { timestamp: 15, text: 'በሰላም(2)ነይ ማርያም(2)' }
              ],
            },
            {
              id: 389,
              title: 'ክነፈ ርግብ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Kinfe_Regbe.opus'),
              duration: 190,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ክነፈ ርግብ በብሩር ዘግቡር ወገበዋቲሃኒ ሐመልማለ ወርቅ(2)' },
                { timestamp: 5, text: 'አንቲ ምሥራቅ ወወልድኪ ፀሐየ ጽድቅ' },
                { timestamp: 10, text: 'አማን በአማን(3)ኢየኅልቅ ኪዳንኪ ወላዲተ አምላክ(2)' },
                { timestamp: 15, text: 'ትርጉም እንደ ርግብ ክንፍ በብርም እንደተሠራ ጎኖችሽም ሐመልማለ ወርቅ(2)' },
                { timestamp: 20, text: 'አንቺ ምሥራቅ ልጅሽም የጽድቅ ፀሐይ ነው' },
                { timestamp: 25, text: 'እውነት በእውነት(3)አያልቅም ቃል ኪዳንሽ የአምላክ እናት(2)' }
              ],
            },
            {
              id: 390,
              title: 'ወመጠዋ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Wemetewa.opus'),
              duration: 140,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ወመጠዋ ጽዋዐ ምሉአ በእደዊሆሙ ለመላእክት(2)' },
                { timestamp: 5, text: 'ማርያምሰ(2)እንተ በምድር ታንሶሱ ማርያምሰ(2)' }
              ],
            },
            {
              id: 391,
              title: 'ወትቀውም ንግሥት',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Wetekewm_Nigist.opus'),
              duration: 150,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ወትቀውም ንግሥት(2)በየማንከ(2)' },
                { timestamp: 5, text: 'በአልባሰ ወርቅ(4) ዑጽፍት በአልባሰ ወርቅ(2)' },
                { timestamp: 10, text: 'ትርጉም በወርቅ ልብስ ተጎናጽፋና ተሸፋፍና ንግሥቲቱ በቀኝህ ትቆማለችህ' }
              ],
            },
            {
              id: 392,
              title: 'ጽላት ዘሙሴ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Tsilat_Zemuse.opus'),
              duration: 145,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ጽላት ዘሙሴ ዕፀ ጳጦስ ዘሲና(2)' },
                { timestamp: 5, text: 'ጸናጽል(5)ለአሮን ካህን(2)' },
                { timestamp: 10, text: 'ትርጉም እመቤታችን የሙሴ ጽላት የሲና ዕፀ ጳጦስ የካህኑ አሮን ጸናጽል ነሽ' }
              ],
            },
            {
              id: 393,
              title: 'ባርኪን',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Barkin_Barkin.opus'),
              duration: 130,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ባርኪን ባርኪን ልጆችሽን ባርኪን (2)' },
                { timestamp: 5, text: 'ድንግል ሆይ በምልጃሽ አንድ ሀሳብ አድርጊን(2)' }
              ],
            },
            {
              id: 394,
              title: 'እግዝእትነ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Egztne.opus'),
              duration: 180,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'እግዝእትነ (2)ነጽሪ ኀቤነ (2)' },
                { timestamp: 5, text: 'ሰላመ ወልድኪ የሀሉ ምስሌነ(4)' },
                { timestamp: 10, text: 'እመቤታችን(2)ተመልከች ወደ እኛ (2)' },
                { timestamp: 15, text: 'የልጅሽ ቸርነት ይሁነን መዳኛ' },
                { timestamp: 20, text: 'የአንቺ አማልጅነት አይለየን ከእኛ(4)' }
              ],
            },
            {
              id: 395,
              title: 'ማርያም ማርያም',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Maryame_Maryame.opus'),
              duration: 140,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ማርያም ማርያም ድንግል ማርያም(2)' },
                { timestamp: 5, text: 'ርኅርኅተ ኀሊና(4)ማርያም(2)' },
                { timestamp: 10, text: 'ትርጉም ማርያም ርህርህተ ኅሊና ናት' }
              ],
            },
            {
              id: 396,
              title: 'ሰሎሞን ይቤላ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Solomon_Yibela.opus'),
              duration: 130,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ሰሎሞን ይቤላ ለማርያም(2)' },
                { timestamp: 5, text: 'ዐዕይንትኪ ዘርግብ ዐዕይንትኪ(2) ሰሎሞን ይቤላ(2)' },
                { timestamp: 10, text: 'ትርጉም ሰሎሞን ዐይኖችሽ የርግብ ናቸው አለ' }
              ],
            },
            {
              id: 397,
              title: 'ማርያም ስምኪ ጥዑም',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Maryame_Simiki_Tume.opus'),
              duration: 155,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ማርያም ስምኪ ጥዑም (2)' },
                { timestamp: 5, text: 'ስምኪ ጥዑም(2)ማርያም ስምኪ ጥዑም' },
                { timestamp: 10, text: 'ማርያም ስምሽ ይጣፍጣል(2)' },
                { timestamp: 15, text: 'ስምሽ ይጣፍጣል(2)ማርያም' },
                { timestamp: 20, text: 'ስምሽ ይጣፍጣል(2)' }
              ],
            },
            {
              id: 398,
              title: 'የአምላክ ቸርነቱ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Yeamlak_chernetu_edited.opus'),
              duration: 280,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'የአምላክ ቸርነቱ ፈቃዱ ሲሆን ጨለማው ተገፎ ሲወጣ ብርሃን' },
                { timestamp: 10, text: 'ማርያም(3)ደስ ይበልሽ በገብርኤል ሰላምታ' },
                { timestamp: 20, text: 'በአንቺ ስላደረ የዓለም ሁሉ ጌታ(2)' },
                { timestamp: 30, text: 'መድኃኒት ሲመጣ ሰይጣን እንዳፈረ የዜናው አብሳሪ ገብርኤል ነበረ' },
                { timestamp: 40, text: 'ድንግል ተቀምጣ በቤተ መቅደስ ሐር ወርቁን አስማምታ ፈትላ ስታለብስ' },
                { timestamp: 50, text: 'ገብርኤል(2)ዜናዊ ሐዲስ የአምላክን መወለድ ሥጋ በመልበስ' },
                { timestamp: 60, text: 'ገብርኤል ሲያበሥራት ድንግል ስትሰማ በእርሷ ላይ አደረ በመንክረ ግርማ(2)' },
                { timestamp: 70, text: 'እውነተኛ መልአክ መሆኑን ስላየች ይሁንልኝ ብላ ቃሉን ተቀበለች' }
              ],
            },
            {
              id: 399,
              title: 'ክብረ ቅዱሳን',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Kibrekidusan_Yiti.opus'),
              duration: 320,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ክብረ ቅዱሳን ይእቲ(2)ክብረ ቅዱሳን (2)' },
                { timestamp: 5, text: 'ሙዳየ መና ግሩም ሙዳየ መና (2)(2)' },
                { timestamp: 10, text: 'የቅዱሳኑ ክብር ነሽና እንሰጥሻለን ቅኔ ምስጋና' },
                { timestamp: 15, text: 'የወለድሽልን የሕይወት መና ዝናብ ያለብሽ ታናሽ ደመና' },
                { timestamp: 20, text: 'ትህትና ልብስሽ ፍቅር ውበትሽ ጽንስ ያዘልላል ሰላምታ ድምጽሽ' },
                { timestamp: 25, text: 'እሳቱን ወልደሽ እሳት ታቅፈሻል ሳንዘምርልሽ መቼ ይመሻል' },
                { timestamp: 30, text: 'የፀሐይ መውጫ ምሥራቅ ሆነሽ ታላቁን ብርሃን አየንብሽ' },
                { timestamp: 35, text: 'አትጨልምም ሕይወታችን ልጅሽ ስላለ ፀሐያችንን' },
                { timestamp: 40, text: 'ሰአሊ ለነ ሰላም ለኪ ተማሕፀነ በኪዳንኪ' },
                { timestamp: 45, text: 'ንዒ ርግብየ ምስለ ወልድኪ ሰማይ ወምድር ያወድሱኪ' }
              ],
            },
            {
              id: 400,
              title: 'በምን እንመስላት',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Bemin_Bemin.opus'),
              duration: 360,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'በምን በምን እንመስላት ድንግል ማርያምን(2)' },
                { timestamp: 5, text: 'ምሳሌ የላትም (2)ክብሯን የሚመጥን(2)' },
                { timestamp: 10, text: 'የሙሴ ጽላት ነሽ የምሕረት ቃል ኪዳን የያዕቆብ መሰላል የአብርሃም ድንኳን' },
                { timestamp: 20, text: 'የብርሃን መውጫ የኖኀ ድንቅ መርከብ የመላእክት እህት የሩኀሩኃን ርግብ(2)' },
                { timestamp: 30, text: 'የሰሎሞን አክሊል የአሮን በትር የዕዝራ መሰንቆ የጌዴዎን ፀምር' },
                { timestamp: 40, text: 'ድንግል እመቤት ናት የጻድቃኖች በር ሆና የተገኘች የአምላክ ማኀደር(2)' },
                { timestamp: 50, text: 'የቅዱሳን እናት የዓለም ንግሥት ችላ ተሸከመች መለኮት እሳት' },
                { timestamp: 60, text: 'ብርሃን ትሁነን ጨለማን ገላልጣ አማልዳ ታስምረን ከዚህ ዓለም ጣጣ(2)' },
                { timestamp: 70, text: 'ከማር ይጣፍጣል የድንግል መዓዛ አምላክን አቅፋለች በሁለት እጇ ይዛ' },
                { timestamp: 80, text: 'ዓለሙ ሁሉ የዳነው በልጅሽ ነውና እናታችን ጽዮን ይድረስሽ ምስጋና(2)' }
              ],
            },
            {
              id: 401,
              title: 'ሰአሊ ለነ ቅድስት',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Sealilene_Kidist.opus'),
              duration: 300,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ሰአሊ ለነ ቅድስት እንልሻለን(2) እንደ ኤፍሬም እንደ አባታችን ለምኝልን እመቤታችን(2)' },
                { timestamp: 10, text: 'ተስፋቸው ነሽና ለፍጥረት ዓለም እየተመኩብሽ እስከ ዘለዓለም' },
                { timestamp: 20, text: 'ኃጢአታቸው ተደምስሶላቸው በአንቺ ጸሎት ዳነች ሕይወታቸው(2)፟' },
                { timestamp: 30, text: 'ስምሽም ስልጡን ነው በእግዚአብሔር መንበር ቃል ኪዳን ገባልሽ ልጆችሽን ሊምር' },
                { timestamp: 40, text: 'በአንቺ ጸሎት ይተማመናሉ ጠዋት ማታ ቅድስት ሆይ ይላሉ(2)' },
                { timestamp: 50, text: 'ዓለም ስትዋጋን በምኞት ስለት ነፍሳችን ስትዝል ሲከብዳት ኃጢአት' },
                { timestamp: 60, text: 'መንገድ ጠፍቶን ግራ ሲገባን ብርሃናችን ነይ እናታችን(2)' },
                { timestamp: 70, text: 'የልባችን ሐዘን እጅግ ከብዶብናል ከበለሱ በታች በፍርሃት ቆመናል' },
                { timestamp: 80, text: 'እንደ ኤልሳቤጥ እንደ ዘመድሽ ደስ አሰኝን ይሰማ ድምጽሽ(2)' }
              ],
            },
            {
              id: 402,
              title: 'ደስ ይበልሽ (2)',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Des_Yibelsh.opus'),
              duration: 310,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ደስ ይበልሽ (2)ማርያም ንጽሕት ድንግል(2) ደስ ይበልሽ ከሴቶቹ ሁሉ የተባረክሽ ነሽ(2)' },
                { timestamp: 10, text: 'ሰላም እልሻለሁ ማርያም ድንግል እንደ ብሥራታዊው እንደ ገብርኤል' },
                { timestamp: 20, text: 'ለአንቺ የተሰጠሽ ሁለት ድንግልና አንደኛው በሥጋ ሌላው በኀሊና' },
                { timestamp: 30, text: 'ከዓለሙ ሁሉ ሴቶች ንጽሕት በመሆንሽ ሰማያዊ ምሥጢር የተገለፀልሽ' },
                { timestamp: 40, text: 'የልዑል ማደሪያ ለመሆን ያበቃሽ የጌታችን እናት በጣም ደስ ይበልሽ' },
                { timestamp: 50, text: 'የተነበየላት ሕዝቅኤል ነቢዩ የተዘጋችው ደጅ ብሎ በራዕዩ' },
                { timestamp: 60, text: 'ሳይከፍት ገብቶ ወጣ የሠራዊት ጌታ ደግሞ ከዚያ በኋላ ኖራለች ተዘግታ' },
                { timestamp: 70, text: 'ማርያም ስትጎበኛት ወደ ቤቷ ገብታ ኤልሳቤት ዘመረች በመንፈስ ተሞልታ' },
                { timestamp: 80, text: 'በማህፀኗ ያለው ዘለለ በደስታ እኛንም ትጎብኘን ከጠዋት እስከ ማታ' }
              ],
            },
            {
              id: 403,
              title: 'ኪዳነ ምሕረት እመቤት',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              // audio_url: require('../assets/music/Fitha_Gifuan.opus'),
              duration: 340,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ኪዳነ ምሕረት እመቤት (2) ነይልን(2) ካለንበት(2)' },
                { timestamp: 10, text: 'በሰማያት በላይ ካለው ከማደሪያሽ (2) ዝማሬ ከሞላው ከዘለዓለም ቤትሽ' },
                { timestamp: 20, text: 'የምድር ፍጥረታት ማርያም ማርያም ሲሉሽ(2) የቃል እናት እመቤቴ ነይ በሠረገላሽ(2)' },
                { timestamp: 30, text: 'ከፀጥታ ወደብ ከእውነት ከተማ (2) ከሰላሙ መንደር ከእውነት ከተማ' },
                { timestamp: 40, text: 'ሰአሊ ለነ ቅድስት ውዳሴሽ ሲሰማ (2) ከሚካኤል ከገብርኤል ጋር ነይልን ከራማ (2)' },
                { timestamp: 50, text: 'ዘርፋፋው ቀሚስሽ ይውረድ ከሰማያት (2) እንባችን ይታበስ ባንቺ አማላጅነት' },
                { timestamp: 60, text: 'የጽዮን ዝማሬ ተሞላች ነፍሳችን (2) ንዒ(3) እንበል እንደ አባቶቻችን (2)' },
                { timestamp: 70, text: 'ፍጥረታት ሊድኑ በአማላጅነትሽ(2) የዘለዓለም ኪዳን አማኑኤል ሰጠሽ' },
                { timestamp: 80, text: 'ትውልድ ይህን አምኖ ብፅይት ይሉሻል(2) እናቴ መመኪያዬ ምርኩዜ ሆነሻል(2)' },
                { timestamp: 90, text: 'የልብን ሲያዋዩሽ ሰምተሽ ዝም አትይም (2) ችግረኛን አይቶ ልብሽ አይጨክንም' },
                { timestamp: 100, text: 'ከዓይን ጥቅሻ ፈጥነሽ ትደርሺለታለሽ(2) ከሐዘን ከመከራ ታሳሪፊዋለሽ (2)' }
              ],
            },
            {
              id: 404,
              title: 'ደስ ይበለን በጣም',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Des_Yibelen_Betam.opus'),
              duration: 320,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ደስ ይበለን በጣም ደስ ይበለን (2) በረከቱን ለእኛ ስላደለን' },
                { timestamp: 10, text: 'በጨለማ ስንሮር ደስ ይበለን በኃጢአት ተከበን ደስ ይበለን' },
                { timestamp: 20, text: 'የሕይወትን ብርሃን ደስ ይበለን ፍቅሩን አበራልን ደስ ይበለን' },
                { timestamp: 30, text: 'ወደ ምሥራቅ እዩ ደስ ይበለን ፀሐይ ወዳለበት ደስ ይበለን' },
                { timestamp: 40, text: 'ጨለማው ልባችን ደስ ይበለን ጎህ እንዲቀድበት ደስ ይበለን' },
                { timestamp: 50, text: 'የፀሐይ እናቱ ደስ ይበለን ማርያም እመቤቴ ደስ ይበለን' },
                { timestamp: 60, text: 'እለምንሻለሁ ደስ ይበለን እስከዕለተ ሞቴ ደስ ይበለን' },
                { timestamp: 70, text: 'የልቤ ማረፊያ ደስ ይበለን የዘለዓለም ቤቴ ደስ ይበለን' },
                { timestamp: 80, text: 'አንቺ ነሽ ተስፋዬ ደስ ይበለን ዕፀ መድኃኒቴ ደስ ይበለን' },
                { timestamp: 90, text: 'የግሸኗ ንግሥት ደስ ይበለን የአምላክ እናት ደስ ይበለን' },
                { timestamp: 100, text: 'ሆና ተሰጥታለች ደስ ይበለን የሚመኩባት ደስ ይበለን' },
                { timestamp: 110, text: 'በልቼ ጠጥቼ ደስ ይበለን የምረካብሽ ደስ ይበለን' },
                { timestamp: 120, text: 'ጎጆ ማረፊያዬ ደስ ይበለን ማርያም አንቺ ነሽ ደስ ይበለን' },
                { timestamp: 130, text: 'ፀአዳ እመቤቴ ደስ ይበለን ሐመልማለ ሲና ደስ ይበለን' },
                { timestamp: 140, text: 'የሕዝቅኤል ደጃፍ ደስ ይበለን የሙሴ ደመና ደስ ይበለን' },
                { timestamp: 150, text: 'የተዋበች ዕንቁ ደስ ይበለን' },
                { timestamp: 160, text: 'የደጎች አዝመራ ደስ ይበለን' },
                { timestamp: 170, text: 'በማህፀንሽ ፍሬ ደስ ይበለን ሕይወታችን በራ ደስ ይበለን' }
              ],
            },
            {
              id: 405,
              title: 'ተናገራ እዝራ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Tenagera_Ezzra.opus'),
              duration: 350,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'ተናገራ እዝራ ተናገራ ዳዊት ዘመራ(2)' },
                { timestamp: 10, text: 'እዝራ በመሰንቆ እያጫወታት ዳዊት ዘመራ ሳታውቀው አለፈ ያ መልአከ ሞት ዳዊት ዘመራ' },
                { timestamp: 20, text: 'ውሆች ቀለም ሆነው እንጨቶች ብዕር ዳዊት ዘመራ ቢጽፉት አያልቅም የማርያም ክብር ዳዊት ዘመራ' },
                { timestamp: 30, text: 'አዘክሪ ድንግል ከልጅሽ በእውነት ዳዊት ዘመራ በደህና እንዲያደርሰን ለመጪው ዓመት ዳዊት ዘመራ' },
                { timestamp: 40, text: 'አዘከረች ድንግል ከልጇ በእውነት ዳዊት ዘመራ ይኸው አደረሰን ለዛሬዋ ዕለት ዳዊት ዘመራ' },
                { timestamp: 50, text: 'እንድናገኝ ፍቅር እንደ ሐዋርያት ዳዊት ዘመራ እንደ እመቤታችን አርምሞ ትዕግስት ዳዊት ዘመራ' },
                { timestamp: 60, text: 'ያድለን ፈጣሪ ፍጹም በረከት ዳዊት ዘመራ' },
                { timestamp: 70, text: 'እመቤቴ ማርያም እመቤቴ ሆይ ዳዊት ዘመራ አንቺን ያመነ ሰው ይኮነናል ሆይ ዳዊት ዘመራ' },
                { timestamp: 80, text: 'እመቤቴ ማርያም መሠረተ ገዳም ዳዊት ዘመራ አንቺን ያመነ ሰው መቼ አይጎዳም ዳዊት ዘመራ' },
                { timestamp: 90, text: 'እስኪ እናመስግናት እንዲህ በማለት ዳዊት ዘመራ ቅድስት እናታችን ኪዳነ ምሕረት ዳዊት ዘመራ' },
                { timestamp: 100, text: 'አብ እሳት ወልድ እሳት መንፈስ ቅዱስ እሳት ዳዊት ዘመራ' },
                { timestamp: 110, text: 'እባክህ ጌታዬ ይቺን ቀን ቀድሳት ዳዊት ዘመራ' }
              ],
            },
            {
              id: 406,
              title: 'በሰላም ንዒ ንዒ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Beselam_Ni.opus'),
              duration: 180,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'በሰላም ንዒ ንዒ ማርያም(2) ትናዝዝኒ (2)ሐዘነ ልብየ(2)' },
                { timestamp: 10, text: 'ምስለ ሚካኤል(2) ወገብርኤል(2) ምስለ ሱራፌል(2) ወኪሩቤል(2)' },
                { timestamp: 20, text: 'ምስለ ዑራኤል(2) ወሩፋኤል(2) ምስለ ኩሎሙ (2)ቅዱሳን(2)' },
                { timestamp: 30, text: 'ምስለ ወልድኪ(2)አማኑኤል(2)' }
              ],
            },
            {
              id: 407,
              title: 'መላእክት ይብልዋ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Melakt_Yiblwa.opus'),
              duration: 240,
              genre: 'እዝል ዓራራይ ቅኝት',
              lyrics: [
                { timestamp: 0, text: 'መላእክት ይብልዋ (2) ለማርያም' },
                { timestamp: 5, text: 'ሰላም ለኪ(4) ይብልዋ ሰላም ለኪ' },
                { timestamp: 15, text: 'ካህናት ይብልዋ (2)ለማርያም' },
                { timestamp: 20, text: 'ሰላም ለኪ(4) ይብልዋ ሰላም ለኪ' },
                { timestamp: 30, text: 'ዲያቆናት ይብልዋ(2)ለማርያም' },
                { timestamp: 35, text: 'ሰላም ለኪ(4) ይብልዋ ሰላም ለኪ' },
                { timestamp: 45, text: 'መዘምራን ይብልዋ(2)ለማርያም' },
                { timestamp: 50, text: 'ሰላም ለኪ(4) ይብልዋ ሰላም ለኪ' },
                { timestamp: 60, text: 'መነኮሳት ይብልዋ (2)ለማርያም' },
                { timestamp: 65, text: 'ሰላም ለኪ(4) ይብልዋ ሰላም ለኪ' },
                { timestamp: 75, text: 'ደናግል ይብልዋ (2)ለማርያም' },
                { timestamp: 80, text: 'ሰላም ለኪ(4) ይብልዋ ሰላም ለኪ' },
                { timestamp: 90, text: 'ምእመናን ይብልዋ(2)ለማርያም' },
                { timestamp: 95, text: 'ሰላም ለኪ(4) ይብልዋ ሰላም ለኪ' }
              ],
            },
          ]
        },
        {
          id: 'yebata_mezmur_sub2_b',
          name: 'ግእዝ 1',
          image: require('../assets/images/beata.png'), 
          songs: [
            {
              id: 408,
              title: 'አእላፍ መላእክት',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Aelafe_Melakt.opus'),
              duration: 140,
              genre: 'ግእዝ 1',
              lyrics: [
                { timestamp: 0, text: 'አእላፍ መላእክት(2)' },
                { timestamp: 5, text: 'ይትለአኩኪ መላእክት(2)' },
                { timestamp: 10, text: 'ትርጉም የብዙ ብዙ መላእክት ይላኩሻል ያገለግሉሻል' }
              ],
            },
            {
              id: 409,
              title: 'ፀቃውዕ ይውኀዝ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Tsekawe_Yiwyz.opus'),
              duration: 130,
              genre: 'ግእዝ 1',
              lyrics: [
                { timestamp: 0, text: 'ፀቃውዕ ይውኀዝ(2)' },
                { timestamp: 5, text: 'ይውኀዝ እምከናፍሪሃ(2)' },
                { timestamp: 10, text: 'ትርጉም የማር ወለላ (ጣፋጭ ነገር)ከከናፍሮቿ ይፈስሳል(ከእመቤታችን)' }
              ],
            },
            {
              id: 410,
              title: 'ከመ ጽጌ ሮማን',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Keme_Tsige_Roman.opus'),
              duration: 150,
              genre: 'ግእዝ 1',
              lyrics: [
                { timestamp: 0, text: 'ከመ ጽጌ ሮማን ከመ ጽጌ(2)' },
                { timestamp: 5, text: 'አበባዬ(2)ወላዲተ አምላክ ሲሳይ(2)' },
                { timestamp: 10, text: 'ትርጉም እንደ ሮማን አበባ ያማረች የአምላክ እናት ማርያም ሲሳይ ናት' }
              ],
            },
            {
              id: 411,
              title: 'ትህትናሽ ግሩም',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Tihtnash_Girum.opus'),
              duration: 320,
              genre: 'ግእዝ 1',
              lyrics: [
                { timestamp: 0, text: 'ትህትናሽ ግሩም ነው ደግነትሽም እናቱ ሆነሻል ለመድኃኔዓለም(2)' },
                { timestamp: 10, text: 'ንጽሕት ስለሆንሽ እመቤቴ እመቤቴ እንከን የሌለብሽ እመቤቴ እመቤቴ' },
                { timestamp: 20, text: 'የፍጥረታት ጌታ እመቤቴ እመቤቴ በአንቺ ያደረብሽ እመቤቴ እመቤቴ' },
                { timestamp: 30, text: 'የድንግል መመረጥ እመቤቴ እመቤቴ ዜናው አስገረመኝ እመቤቴ እመቤቴ' },
                { timestamp: 40, text: 'እሳቱን ታቀፈች እመቤቴ እመቤቴ የማይቻለውን እመቤቴ እመቤቴ' },
                { timestamp: 50, text: 'ምርኩዜ ልበልሽ እመቤቴ እመቤቴ ጥላ ከለላዬ እመቤቴ እመቤቴ' },
                { timestamp: 60, text: 'ጋሻዬ ነሽ አንቺ እመቤቴ እመቤቴ ለኔስ መመኪያዬ እመቤቴ እመቤቴ' },
                { timestamp: 70, text: 'በዓለም እንዳልጠፋ እመቤቴ እመቤቴ ሕይወቴ መሮብኝ እመቤቴ እመቤቴ' },
                { timestamp: 80, text: 'እንደ ወይን አጣፍጪው እመቤቴ እመቤቴ ድንግል ድረሺልኝ እመቤቴ እመቤቴ' },
                { timestamp: 90, text: 'የምሥራቅ ደጃፍ ነሽ እመቤቴ እመቤቴ የሁላችን ተስፋ እመቤቴ እመቤቴ' },
                { timestamp: 100, text: 'እሙ ለፀሐየ ጽድቅ እመቤቴ እመቤቴ የሁሉ ጠበቃ እመቤቴ እመቤቴ' },
                { timestamp: 110, text: 'ድንግል የድል አክሊል እመቤቴ እመቤቴ ድንግል የጽድቅ ሥራ እመቤቴ እመቤቴ' },
                { timestamp: 120, text: 'ድንግል መሰላል ነሽ እመቤቴ እመቤቴ የተዋሕዶ ተስፋ እመቤቴ እመቤቴ' }
              ],
            }
          ]
        },
        {
          id: 'yebata_mezmur_sub2',
          name: 'ግእዝ 1',
          image: require('../assets/images/beata.png'), 
          songs: [
            {
              id: 412,
              title: 'አእላፍ መላእክት',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Aelafe_Melakt.opus'),
              duration: 140,
              genre: 'ግእዝ 1',
              lyrics: [
                { timestamp: 0, text: 'አእላፍ መላእክት(2)' },
                { timestamp: 5, text: 'ይትለአኩኪ መላእክት(2)' },
                { timestamp: 10, text: 'ትርጉም የብዙ ብዙ መላእክት ይላኩሻል ያገለግሉሻል' }
              ],
            },
            {
              id: 413,
              title: 'ፀቃውዕ ይውኀዝ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Tsekawe_Yiwyz.opus'),
              duration: 130,
              genre: 'ግእዝ 1',
              lyrics: [
                { timestamp: 0, text: 'ፀቃውዕ ይውኀዝ(2)' },
                { timestamp: 5, text: 'ይውኀዝ እምከናፍሪሃ(2)' },
                { timestamp: 10, text: 'ትርጉም የማር ወለላ (ጣፋጭ ነገር)ከከናፍሮቿ ይፈስሳል(ከእመቤታችን)' }
              ],
            },
            {
              id: 414,
              title: 'ከመ ጽጌ ሮማን',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Keme_Tsige_Roman.opus'),
              duration: 150,
              genre: 'ግእዝ 1',
              lyrics: [
                { timestamp: 0, text: 'ከመ ጽጌ ሮማን ከመ ጽጌ(2)' },
                { timestamp: 5, text: 'አበባዬ(2)ወላዲተ አምላክ ሲሳይ(2)' },
                { timestamp: 10, text: 'ትርጉም እንደ ሮማን አበባ ያማረች የአምላክ እናት ማርያም ሲሳይ ናት' }
              ],
            },
            {
              id: 415,
              title: 'ትሕትናሽ ግሩም ነው',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Tihtnash_Girum.opus'),
              duration: 320,
              genre: 'ግእዝ 1',
              lyrics: [
                { timestamp: 0, text: 'ትሕትናሽ ግሩም ነው ደግነትሽም እናቱ ሆነሻል ለመድኃኔዓለም(2)' },
                { timestamp: 10, text: 'ንጽሕት ስለሆንሽ እመቤቴ እመቤቴ እንከን የሌለብሽ እመቤቴ እመቤቴ' },
                { timestamp: 20, text: 'የፍጥረታት ጌታ እመቤቴ እመቤቴ በአንቺ ያደረብሽ እመቤቴ እመቤቴ' },
                { timestamp: 30, text: 'የድንግል መመረጥ እመቤቴ እመቤቴ ዜናው አስገረመኝ እመቤቴ እመቤቴ' },
                { timestamp: 40, text: 'እሳቱን ታቀፈች እመቤቴ እመቤቴ የማይቻለውን እመቤቴ እመቤቴ' },
                { timestamp: 50, text: 'ምርኩዜ ልበልሽ እመቤቴ እመቤቴ ጥላ ከለላዬ እመቤቴ እመቤቴ' },
                { timestamp: 60, text: 'ጋሻዬ ነሽ አንቺ እመቤቴ እመቤቴ ለኔስ መመኪያዬ እመቤቴ እመቤቴ' },
                { timestamp: 70, text: 'በዓለም እንዳልጠፋ እመቤቴ እመቤቴ ሕይወቴ መሮብኝ እመቤቴ እመቤቴ' },
                { timestamp: 80, text: 'እንደ ወይን አጣፍጪው እመቤቴ እመቤቴ ድንግል ድረሺልኝ እመቤቴ እመቤቴ' },
                { timestamp: 90, text: 'የምሥራቅ ደጃፍ ነሽ እመቤቴ እመቤቴ የሁላችን ተስፋ እመቤቴ እመቤቴ' },
                { timestamp: 100, text: 'እሙ ለፀሐየ ጽድቅ እመቤቴ እመቤቴ የሁሉ ጠበቃ እመቤቴ እመቤቴ' },
                { timestamp: 110, text: 'ድንግል የድል አክሊል እመቤቴ እመቤቴ ድንግል የጽድቅ ሥራ እመቤቴ እመቤቴ' },
                { timestamp: 120, text: 'ድንግል መሰላል ነሽ እመቤቴ እመቤቴ የተዋሕዶ ተስፋ እመቤቴ እመቤቴ' }
              ],
            }
          ]
        },
        {
          id: 'yebata_mezmur_sub3_b',
          name: 'ግእዝ 2',
          image: require('../assets/images/beata.png'), 
          songs: [
            {
              id: 416,
              title: 'አእመራ ዘካርያስ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Aemera_Zekaryas.opus'),
              duration: 160,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'አእመራ ዘካርያስ ከመ እሙ ይእቲ ለሰማያዊ ንጉሥ(2)' },
                { timestamp: 10, text: 'እመ በግዕ ዘትነብር በቤተ መቅደስ(2)' },
                { timestamp: 20, text: 'ትርጉም በቤተ መቅደስ የምትቀመጥ የሰማያዊ ንጉሥ የዓለምን ኃጢአት የሚያስተሰርይ በግ እናት መሆኗን አወቀ' }
              ],
            },
            {
              id: 417,
              title: 'ንጽይተ ንጹሐን',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Nisitenisuan.opus'),
              duration: 180,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'ንጽሕተ ንጹሐን ከዊና ከመ ታቦተ ዶር ዘሲና' },
                { timestamp: 5, text: 'ውስተ ቤተመቅደስ ነበረት በቅድስና ነበረት (2)' },
                { timestamp: 15, text: 'ሲሳያ ኅብስተ መና ወስቴሃኒ ስቴ ጽሙና(2)' },
                { timestamp: 25, text: 'ትርጉም ከንጹሐን ንጹሕ ሆኖ በሲና እንደ ነበረው ታቦት በንጽሕና በቤተ መቅደስ ውስጥ ኖረች' },
                { timestamp: 35, text: 'ምግቧም ሕብስተ መና መጠጧም የጸጥታ መጠጥም ነበር' }
              ],
            },
            {
              id: 418,
              title: 'እንዘ ዘልፈ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Enzezelfe_Tinber.opus'),
              duration: 145,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'እንዘ ዘልፈ ትነብር ውስተ ቤተ እግዚአብሔር (2)' },
                { timestamp: 10, text: 'አስተርአያ መልአክ ዘኢኮነ(2)ከመ ቀዲሙ ኢኮነ(2)' },
                { timestamp: 20, text: 'ትርጉም ዘወትር በቤተ መቅደስ እየተቀመጠች እንደ ፊተኛው መልአክ ያልሆነ ታያት' }
              ],
            },
            {
              id: 419,
              title: 'ልዑል ሠምራ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Leul_Semra.opus'),
              duration: 150,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'ልዑል ሠምራ ዳዊት ዘመራ(2)' },
                { timestamp: 10, text: 'በቤተ መቅደስ ተወክፍዋ(2)' },
                { timestamp: 20, text: 'ልዑል መረጣት ዳዊት ዘመረላት(2)' },
                { timestamp: 30, text: 'በቤተ መቅደስ ተቀበሏት(2)' }
              ],
            },
            {
              id: 420,
              title: 'መሶበ ወርቅ ዘመና',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Mesobe_Werke.opus'),
              duration: 140,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'መሶበ ወርቅ ዘመና እግዝእትነ ማርያም ቅድስት(2)' },
                { timestamp: 10, text: 'ቅድስተ ቅዱሳን ይብልዋ ካህናት(2)' },
                { timestamp: 20, text: 'ትርጉም መና ያለባት የወርቅ መሶብ እመቤታችን ማርያምን ካህናት ከቅዱሳት ይልቅ ቅድስት ነሽ እያሉ ያመሰግኗታል' }
              ],
            },
            {
              id: 421,
              title: 'መንክረ ግርማ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Menkre_Girma.opus'),
              duration: 135,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'መንክረ ግርማ ኃይለ ልዑል ጸለላ(2)' },
                { timestamp: 10, text: 'አማን(2)መላእክት ይኬልልዋ(2)' },
                { timestamp: 20, text: 'ትርጉም በሚያስደንቅ ግርማ የልዑል ኃይል ጋረዳት(2)' },
                { timestamp: 30, text: 'በእውነት(2) መላእክት አመሰገኗት (2)' }
              ],
            },
            {
              id: 422,
              title: 'አንቲ ውእቱ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Antiwetu.opus'),
              duration: 155,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'አንቲ ውእቱ ንጽሕት እም ንጹሐን ዘነበርኪ ውስተ ቤተ መቅደስ ከመ ታቦት (2)' },
                { timestamp: 10, text: 'ወመላእክት ያመጽኡ ሲሳየኪ ያመጽኡ (2)' },
                { timestamp: 20, text: 'ትርጉም ከንጹሐን ይልቅ ንጹሕ የሆንሽ እንደ ታቦት በቤተ መቅደስ ነበርሽ መላእክትም ምግብሽን ያመጣሉ' }
              ],
            },
            {
              id: 423,
              title: 'በምድራዊ ሕይወት',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Bemidrawi_Hiwot.opus'),
              duration: 130,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'በምድራዊ ሕይወት(2)በፈተና ቦታ (2)' },
                { timestamp: 10, text: 'ድንግል/ማርያም/ ትጠብቀን እጆቿን ዘርግታ (2)' }
              ],
            },
            {
              id: 424,
              title: 'እንተ በምድር',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Entebemider.opus'),
              duration: 145,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'እንተ በምድር ሥረዊሃ ወበሰማይ አእጹቂሃ(2)' },
                { timestamp: 10, text: 'ሐረገ ወይን(2)ድንግል ሐረገ ወይን(2)' },
                { timestamp: 20, text: 'ትርጉም የወይን ሐረግ ድንግል በሰማይ ቅጠሎቿ በምድርም ሥሮቿ ያሉ ናቸው' }
              ],
            },
            {
              id: 425,
              title: 'ሶበሰ ኪዳንኪ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              audio_url: require('../assets/music/Sobese_Kidanki.opus'),
              duration: 150,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'ሶበሰ ኪዳንኪ ምክንያተ ድኂን ኢሀሎ(2)' },
                { timestamp: 10, text: 'ፈለገ እሳት ወደይን እምአስጠመ ኩሎ' },
                { timestamp: 20, text: 'ፈለገ እሳት ወደይን(2) እምአስጠመ ኩሎ(2)' },
                { timestamp: 30, text: 'ትርጉም የመዳን ምክንያት የሆነ ቃል ኪዳንሽ ባይኖር ኖሮ የእሳት ማዕበል ሁሉን ባሰጠመ ነበር' }
              ],
            },
            {
              id: 426,
              title: 'እሴብሕ ጸጋኪ',
              artist: 'Zefinote Selam Sunday School',
              cover_url: require('../assets/images/beata.png'),
              // audio_url: require('../assets/music/Sealilene_Kidist.opus'),
              duration: 400,
              genre: 'ግእዝ 2',
              lyrics: [
                { timestamp: 0, text: 'እሴብሕ ጸጋኪ ኦ እግዝእትየ ማርያም' },
                { timestamp: 10, text: 'ዕፅ ልምልምት ወፍሬ ጥዕምት(3)' },
                { timestamp: 20, text: 'ሐረገ ወይን(3)አንቲ ማርያም' },
                { timestamp: 30, text: 'ዓጸደ ወይን(3)አንቲ ማርያም ትመስሊ ፊደለ ወትወልዲ ወንጌለ ወታገምሪ መስቀለ' },
                { timestamp: 45, text: 'ትመስሊ ሰማየ ወትወልዲ ፀሐየ ወታገምሪ አዶናየ' },
                { timestamp: 55, text: 'ትመስሊ መሶበ ወትወልዲ ኮከበ ወታጸግቢ ርሁበ' },
                { timestamp: 65, text: 'ትመስሊ መቅደሰ ወትወልዲ ንጉሠ ወታገምሪ መንፈስ ቅዱሰ' },
                { timestamp: 75, text: 'ትመስሊ ታቦተ ወትወልዲ ጽላተ ወታገምሪ መለኮተ' },
                { timestamp: 85, text: 'ትመስሊ ደመና ወትወልዲ ኅብስተ መና ወታገምሪ ጥዒና' },
                { timestamp: 95, text: 'ትመስሊ ገራኅተ ወታፈርዪ ሰዊተ ወታጸድቂ ነፍሳተ' },
                { timestamp: 105, text: 'ትመስሊ ስኂነ ወትወልዲ መድኅነ ወትፌውሲ ድውያነ' },
                { timestamp: 115, text: 'ትመስሊ ምሥራቀ ወትወልዲ መብረቀ ወታለብሲ ርኁቀ' },
                { timestamp: 125, text: 'ለአብ መርዓቱ ለወልድ ወላዲቱ ለመንፈስ ቅዱስ ጽርሐ ቤቱ' }
              ],
            },

        ],
      },
      {
          id: 'yebata_mezmur_sub4',
          name: 'ግእዝ 3',
          image: require('../assets/images/beata.png'), 
          songs: [
              {
                id: 427,
                title: 'በመኑ',
                artist: 'Zefinote Selam Sunday School',
                cover_url: require('../assets/images/beata.png'),
                audio_url: require('../assets/music/Bemenu.opus'),
                duration: 165,
                genre: 'ግእዝ 3',
                lyrics: [
                  { timestamp: 0, text: 'በመኑ በአምሳለ መኑ ናስተማስለኪ(2)' },
                  { timestamp: 10, text: 'እመቤቴ የኔ አማላጅ አዛኝቷ ኦ ድንግል ምልዕተ ውዳሴ(2)' },
                  { timestamp: 20, text: 'ትርጉም ማን በመሰለው ምሳሌ እንመስልሻለን አዛኝቷ ወላዲቷ ምስጋና የተመላሽ ሆይ በማን እንመስልሻለን' }
                ],
              }
          ]
      }
    ],
  },
],
};
