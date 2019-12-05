Dünyanın en güzel blog'u, www.mukemmel.blog!

Bu proje nasıl kodlandı izlemek ister misin? Youtube videosu: https://youtu.be/cHUh0FmPd3A

## YARIŞMAYA KATIL! (son gün 1 Şubat 2020)

1. Sağ üstte bulunan FORK tuşuna tıklayarak projeyi kendi hesabına aktar
2. [Kurulum](#kurulum) adımlarını takip edip projeyi bilgisayarında çalışır hale getir
3. NextJS kullanarak oluşturulmuş bu projeye yeni özellikler ekle ([ne tür özellikler ekleyebilirim?](#ne-tur))
4. Tasarımı güzelleştir
5. Değişiklikleri commitle
6. Tüm değişiklikleri bir commit’e sığdırma, parçalara böl böylelikle zaman içerisinde adım adım geliştirdiğini anlayabileyim
7. Kodun son halini heroku sunucuna yükle
8. Video altına yorum bırakarak heroku linkini ya da kisisel domain linkini bizimle paylaş!
9. 1 Şubat 2020 son gün, bu tarihten sonraki yorumlar yarışmaya dahil olmayacak
10. Kazananı 15 Şubat tarihinde https://medium.com/@selmankahya adresinden açıklayacağım ve kişiye ulaşıp 1500TL’yi hesabına transfer edeceğim

## <a name="kurulum"></a> Kurulum

1. NodeJS yükle: https://nodejs.org/en/download/ (ben 10.15.3 versiyonunu kullanıyorum, sen herhangi stabil güncel versiyon kullanabilirsin)
2. Bu projeyi kendi github hesabına forkla
3. Projeyi bilgisayarına clone'la (nasıl yapılacağini bilmiyorsan [tıkla](https://medium.com/@noteCe/github-ile-fork-ve-pull-request-be6077342834)
4. Terminali aç, ilk olarak `yarn` ardından `yarn dev` komutlarını çalıştır
5. Tarayıcını aç ve `http://localhost:3000` adresine git, blog anasayfasını görmelisin
6. Kod değişiklikleri yap
7. Sık sık değişikliklerini commit'le
8. Videoda gösterdiğim gibi heroku'dan hesap aç ve uygulama oluştur
9. Editör kullanarak `pages/[postId].js` ve `pages/[postId].js` dosyalarında bulunan `http://localhost:3000/` kismini heroku uygulama linki ile değiştir (linkin sağında kalan kısmı silmediğine emin ol)
10. Bilgisayarında bulunan kodu github'a yükle ve heroku'nun uygulamayı sunucuya yüklemesini sağla
11. Yeterince yeni özellik eklediğini düşünüyorsan ve yarışmaya katılmak istiyorsan yukarıdaki adımları takip et
12. Tebrikler! Artık bir blog'un var. Umarım düzenli aralıklarla bildiklerini ve tecrübeni paylaşıp etrafindaki insanlara değer katmaya devam edersin. Blog'unu arkadaşlarınla ve sosyal medyadaki takipçilerinle paylaşmayı unutma!

## <a name="ne-tur"></a> Ne tür özellikler ekleyebilirsin?

### Kolay

- yazı tipini değiştirebilirsin
- renkleri değiştirebilirsin
- bilgisayar, tablet ve mobil cihazlarda farklı ve daha güzel görünmesini sağlayabilirsin
- ...

### Orta

- her iki sayfada tekrar eden kodu refactor et (düzenle) böylelikle kod tekrarı olmasın
- sayfalama ekleyebilirsin
- kendi domain'inde yayınlayabilirsin
- yazıları paylaşma linki
- statik sayfalar ekleyebilirsin (örn. hakkında)
- websitesi linkini ENV değişkeni olarak tanımla (localhost ve heroku linkleri arasında değişiklik yapmana gerek kalmasın, kod nerede çalıştığını anlayıp o linklerden doğru olana istek yapsın)
- google analytics ile entegre et ve ziyaretçi trafiğini takip et
- ...

### Zor

- şifre korulmalı yönetim paneli oluşturabilirsin
- veritabanı entegrasyonu
- yazılara yorum bırakabilme özelliği ekle
- ...

## Video düzeltmeleri

1. Domain eklerken URL yönlendirme aşamasında 4 seçenek içerisinden ilk opsiyonun `www.mukemmel.blog / mukemmel.blog isteklerini yönlendir` seçilmesi gerektiğini söylüyorum. Aslında olması gereken `Yalnızca mukemmel.blog isteklerini yönlendir` seçilip `www.mukemmel.org` adresine yönlendirme eklemekti.
