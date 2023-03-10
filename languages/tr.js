const language = {
loadevent: "Yüklenen player eventi",
loadcmd: "Yüklenen komut",
ready: " başarıyla bağlandı.",
loadslash: "Uygulama [/] komutları başarıyla yeniden yüklendi.",
error1: "Projenize Girdiğiniz Bot Tokeni Yanlış Veya Botunuzun İNTENTLERİ KAPALI!",
error2: "Lütfen projenizdeki bot tokeninizi config.js veya .env dosyanızda ayarlayın!",
loadclientevent: "Yüklenen client eventi",
embed1: "Bu komutu kullanmak için bu sunucuda <@&{djRole}>(DJ) rolünün ayarlanmış olması gerekir. Bu role sahip olmayan kullanıcılar {cmdMAP}'ı kullanamaz",
message1: "Bir ses kanalına bağlı değilsiniz. <:cross:1023313041854570558>",
message2: "Benimle aynı ses kanalında değilsiniz. <:cross:1023313041854570558>",
message3: "Yetersiz yetki",
msg4: "Bir şeyler ters gitti",
msg5: "Şu anda çalan müzik yok. <:cross:1023313041854570558>",
msg6: "Müziki Kaydet",
msg7: "Palylist adını yaz.",
msg8: "Bu şarkı canlı yayın, görüntülenecek süre verisi yok. <:casque:1041604142730317914>",
msg9: "**<:valid:1021966974877696050> Başarılı:** veriler güncellendi.",
msg10: "Bu ada sahip bir oynatma listeniz zaten yok. <:cross:1023313041854570558>",
msg11: "Bu müzik zaten bu oynatma listesinde var. <:cross:1023313041854570558>",
msg12: "müzik çalma listenize eklendi.",
error3: "Uygulama [/] komutları yeniden yüklenirken hata oluştu: ",
error4: "UYARI: Görünüşe göre config.js dosyasına geçerli bir mongodb url'sini yazmamışsınız? Eğer bunu yapmazsanız, müzik komutları çalışmayacaktır.",
msg13: `<:microphone:1037468298633289758> Şuanda çalan: **{track?.title}** -> Kanal: **{queue?.connection.channel.name}** <:casque:1041604142730317914>`,
msg14: "Kuyruk boş. Biraz daha müzik çalabilirsin, hoşçakal... <:valid:1021966974877696050>",
msg15: "Kanalımda kimse kalmadığı için bağlantıyı kestim. <:cross:1023313041854570558>",
msg16: "Ses kanalına bağlanmada sorun yaşıyorum. <:cross:1023313041854570558> Birisi bağlantımı kesmiş gibi? Çok üzgünüm. 😔",
msg17: "Önceki parça yok! <:cross:1023313041854570558>",
msg18: "Şuanda çalan **{queue.previousTracks[1].title}**. <:valid:1021966974877696050>",
msg19: " Bot İstatistikleri",
msg20: "Yenile",
msg21: "**Süreniz Doldu!**",
msg22: "**<:valid:1021966974877696050> Veriler Gündellendi!**",
msg23: "Çalma kuyruğu boş. <:cross:1023313041854570558>",
msg24: "Bütün çalma listesi temizlendi. <a:poubelle:1041604786916708413>",
msg26: "Bir DJ rolü belirtmezseniz, komutu kullanamazsınız!",
msg25: "DJ rolü başarıyla <@&{role}> olarak ayarlandı.",
msg27: "DJ rolü başarıyla silindi.",
msg28: "DJ rolü henüz belirlenmedi.",
msg29: `Lütfen geçerli bir filtre adı girin. <:cross:1023313041854570558>\n{filters}`,
msg30: `Lütfen geçerli bir filtre adı girin. <:cross:1023313041854570558>\n{filters}`,
msg31: `Uygulandı: **{filter}**, Filtre Durumu: **{status}**\n **Unutmayın, müzik uzunsa filtre uygulama süresi buna göre daha uzun olabilir.**`,
msg32: "Artık tamamen ücretsiz ve gelişmiş bir arabirimle diskinizdeki müziği dinlemenin zamanı geldi. Sunucunuzu özel hissettirecek birçok platformda müzik çalmayı destekleyen müzik botu. N [My Networks] (https://nekzy.ml)",
msg33: "Bot Komutları",
msg34: "Burada zaten aktif bir komutunuz var. <:cross:1023313041854570558>",
msg35: "Kuyruk",
msg36: "Şuan Çalan Müzik",
msg37: "Döngüyü Kapat",
msg38: "Tekrarlama Modu",
msg39: `> **Bir seçim yapmaya ne dersiniz?**
> **Kuyruk:** Kuyruğu döngüye sokar.
> **Şuan Çalan Müzik:** Geçerli şarkıyı döngüye alır.
> **Döngüyü Kapat:** Tekrarlama modunu kapatır.`,
msg40: "Kuyruk Döngü Modu",
msg41: "Bir şeyler yanlış gitti. <:cross:1023313041854570558>",
msg42: "Şuan Çalınan Müzik Döngü Modu",
msg43: "Döngü modu zaten etkin değil. <:cross:1023313041854570558>",
msg44: `Döngü Modu **Kapalı** 🔁`,
msg45: "Süre doldu",
msg46: "Döngü Modu - Bitti",
msg47: 'Playliste Kaydet',
msg48: "müzik durduruldu! <:valid:1021966974877696050>",
msg49: `Mesaj Hızı`,
msg50: `Mesaj Yanıt Hızı`,
msg51: `API Yanıt Hızı`,
msg52: `Oynatma listesi yok. <:cross:1023313041854570558>`,
msg53: `Bu oynatma listesini oynatma izniniz yok. <:cross:1023313041854570558>`,
msg54: `Zaten bu ada oynatma listesinde müzik yok. <:cross:1023313041854570558>`,
msg55: `Ses kanalınıza katılamıyorum. <:cross:1023313041854570558>`,
msg56: `Playlist yükleniyor... <:valid:1021966974877696050>`,
msg57: `<@{interaction.member.id}>, **{music_filter.length}** müzik kuyruğa eklendi. <:valid:1021966974877696050>`,
msg58: `Bu ada sahip bir oynatma listesi yok. <:cross:1023313041854570558>`,
msg59: `Aramak istediğiniz parçanın adını yazın. <:cross:1023313041854570558>`,
msg60: `Arama sonucu bulunamadı! <:cross:1023313041854570558>`,
msg61: "Müzik(ler) yükleniyor... <:casque:1041604142730317914>",
msg62: "isimli liste playliste eklendi. <:valid:1021966974877696050>",
msg63: `Kuyruk boş. <:cross:1023313041854570558>`,
msg64: "Sunucu Müzik Listesi",
msg65: "Şuanda çalan müzik",
msg66: "İsteyen",
msg67: "Sayfa",
msg68: `Komut iptal edildi. <:valid:1021966974877696050>`,
msg69: `Sunucu Müzik Listesi - Süre Doldu`,
msg70: `Bu komutu kullanmak için süreniz doldu, komutu tekrar kullanmak için \`/queue\` yazabilirsiniz.`,
msg71: `Bir şeyler yanlış gitti. <:cross:1023313041854570558> Daha önce müziği durdurmamış gibisin.`,
msg72: "Müzik devam ediyor! <:valid:1021966974877696050>",
msg73: `Lütfen geçerli bir şarkı adı girin. <:cross:1023313041854570558>`,
msg74: `Arama Sonucu Bulunamadı! <:cross:1023313041854570558>`,
msg75: "Aranan Müzik",
msg76: "**1** ile **{maxTracks.length}** arasında bir şarkı seçin ⬇️",
msg77: `Müzik arama isteği iptal edildi. <:valid:1021966974877696050>`,
msg78: `Yükleniyor... <:casque:1041604142730317914>`,
msg79: "kuyruğa eklendi. <:valid:1021966974877696050>",
msg80: `Şarkı arama süresi doldu <:cross:1023313041854570558>`,
msg81: "İptal",
msg82: `The number you entered is higher than the amount of songs in the queue. <:cross:1023313041854570558>`,
msg83: "Müzik geçildi <:valid:1021966974877696050>",
msg84: `Bu şarkı canlı yayın, görüntülenecek süre verisi yok. <:casque:1041604142730317914>`,
msg85: `Müzik kapatıldı. Daha sonra görüşürüz. <:valid:1021966974877696050>`,
msg86: "Güncelle",
msg87: `Şuanki Ses Düzeyi: **{queue.volume}** 🔊\n**Sesi değiştirmek için \`1\` ile \`{maxVol}\` arasında bir sayı yazın.**`,
msg88: `Değiştirmek istediğiniz ses seviyesi zaten mevcut ses seviyesi ile aynı <:cross:1023313041854570558>`,
msg89: `**Sesi değiştirmek için \`1\` ile \`{maxVol}\` arasında bir sayı yazın.** <:cross:1023313041854570558>`,
msg90: "Yeni ses düzeyi:",
msg91: `Oluşturmak istediğiniz çalma listesinin adını yazın. <:cross:1023313041854570558>`,
msg92: `Bu ada sahip bir oynatma listesi zaten var. <:cross:1023313041854570558>`, 
msg93: `30'dan fazla oynatma listeniz olamaz. <:cross:1023313041854570558>`,
msg94: "Oynatma listesi oluşturuluyor... <:casque:1041604142730317914>",
msg95: "Oynatma listesi oluşturuldu! <:casque:1041604142730317914>",
msg96: `Bu ada sahip bir oynatma listeniz zaten yok. <:cross:1023313041854570558>`,
msg97: "Oynatma listesi siliniyor... <:casque:1041604142730317914>",
msg98: "Oynatma listesi silindi! <:casque:1041604142730317914>",
msg99: `Aramak istediğiniz parçanın adını yazın. <:cross:1023313041854570558>`,
msg100: `Müziği eklemek istediğiniz çalma listesinin adını yazın. <:cross:1023313041854570558>`,
msg101: `Bir oynatma listesinde en fazla {max_music} müzik bulunabilir. <:cross:1023313041854570558>`,
msg102: "Müzik(ler) yükleniyor... <:casque:1041604142730317914>",
msg103: "Tüm müzikler çalma listenize eklendi! <:casque:1041604142730317914>",
msg104: `Bu müzik zaten bu oynatma listesinde var. <:cross:1023313041854570558>`,
msg105: "oynatma listesine eklendi! <:casque:1041604142730317914>",
msg106: `Müziği silmek istediğiniz çalma listesinin adını yazın. <:cross:1023313041854570558>`,
msg107: `Zaten bu ada sahip bir müziğiniz yok. <:cross:1023313041854570558>`,
msg108: "Müzik siliniyor... <:casque:1041604142730317914>",
msg109: "Müzik silindi. <:casque:1041604142730317914>",
msg110: "Aramak istediğiniz çalma listesinin adını yazın. <:cross:1023313041854570558>",
msg111: `Bu oynatma listesinde hiç müziğiniz yok. <:cross:1023313041854570558>`,
msg112: "En İyi Herkese Açık Oynatma Listeleri",
msg113: `Bu komutu kullanmak için süreniz doldu, komutu tekrar kullanmak için \`/playlist top\` yazabilirsiniz.`,
msg114: `Hiç herkese açık oynatma listesi yok. <:cross:1023313041854570558>`,
msg115: "Senin Oynatma Listelerin",
msg116: `müzik`,
msg117: `Herhangi bir oynatma listeniz yok. <:cross:1023313041854570558>`,
msg118: "Bu komutu kullanmak için süreniz doldu, komutu tekrar kullanmak için \`/playlist list {name}\` yazabilirsiniz.",
msg119: "**/play playlist <liste-ismi>** komutu ile playlistleri dinleyebilirsiniz.\nBir listedeki müzikleri görmek için **/playlist list <list-name>** yazın.",
msg120: "Lütfen bir metin kanalı belirt.",
msg121: "<#{channel}> isimli kanal komut kullanma kanalı listesine eklendi artık sadece listedeki kanallarda bot komutu kullanılabilecek.",
msg122: "Zaten kayıtlı bir veri yok.",
msg123: "<#{channel}> isimli kanal komut kullanma kanalı listesinden silindi.",
msg124: "Bu kanal zaten kommut kullanma kanalı listesinde var.",
msg125: "Bu kanal bir metin kanalı değil.",
msg126: "<:cross:1023313041854570558> Bu sunucuda komut kullanabileceğin kanal listesi şudur: {channel_filter}",
msg127: "Komut bulunamadı.",
error7: "Lütfen bu komutu daha sonra tekrar deneyin. Olası hata bot geliştiricilerine bildirildi.",
msg128: "Müzik çalarken beni susturdun. Bu yüzden müziği durdurdum. Eğer mutemi açarsan devam edeceğim. 😔",
msg129: "oynatma",
msg130: "Lütfen geçerli bir sayı yaz.",
msg131: "listede yer alan komutları kullanabilmek için bota oy vermen gerekli.",
msg132: "Zaten durdurulmuş müzik yok.",
msg133: "Çalma listesindeki sırayı karıştırdım."
}
module.exports = language;
