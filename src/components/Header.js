import React from "react";

function Header() {
  return (
    <header>
      <video src="/video.mp4" loop autoPlay muted></video>
      <h1>IODI Probolinggo</h1>
      <span style={{color: "white", zIndex: "1", textAlign: "center", paddingBottom: 20, width: "70%"}}>Olahraga dansa/Dancesport adalah perpaduan antara gerakan tari dan gerakan tubuh, sehingga tidak hanya diperlukan penguasaan langkah-langkah yang artistik dan keserasian dengan irama musik yang mengiringi, tetapi juga diperlukan kemampuan menguasai koreografi serta stamina dan kekuatan fisik.  Tidak berbeda dengan cabang-cabang olahraga lain seperti senam artistik dan olahraga bela diri, olahraga dansa/Dancesport juga merupakan perpaduan antara seni, mental stamina, tehnik dan fisik.</span>
      <button className="btn" style={{ cursor: "pointer" }}>
          Pelajari Lebih Lanjut
        </button>
      <div className="headerbg"></div>
    </header>
  );
}
export default Header;
