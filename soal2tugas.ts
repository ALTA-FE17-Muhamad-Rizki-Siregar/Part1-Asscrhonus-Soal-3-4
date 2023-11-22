function delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  function generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function lottery(num: number): Promise<string> {
    console.log("Undian lotre dimulai...");
    console.log("Sedang mengundi nomor Anda...");
  
    return delay(10000) // Menunggu 10 detik
      .then(() => {
        const winningNumber = generateRandomNumber(1, 1000);
        console.log(`Nomor Pemenang: ${winningNumber}`);
        
        if (num === winningNumber) {
          return "Selamat! Anda mendapatkan hadiah utama berupa mobil.";
        } else {
          return "Maaf, Anda kurang beruntung. Coba lagi lain kali.";
        }
      });
  }
  
  lottery(5)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => console.log("Undian lotre telah berakhir."));