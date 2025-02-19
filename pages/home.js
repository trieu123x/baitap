function Home() {
  document.querySelector("#abb").innerHTML = `
        <div id="abb" class="flex flex-row">
        <div class="border-r text-lg p-8 h-screen flex flex-col space-y-4 w-[300px] ">
            <a href="/" data-navigo> Home</a>
            <a href="/short" data-navigo>Short</a>
            <a href="/sub" data-navigo>Kenh Dang Ky</a>
        </div>
        <div class="space-y-4 content">
            <div id="app" class="flex flex-col space-y-4 mt-8 ml-4">
                <a class=" space-y-4" href="/video1" data-navigo>
        <div class="flex flex-row space-x-4">
            <img class="rounded-lg w-[350px] h-[200px]" src="https://i.ytimg.com/vi/iLafAVSleFI/maxresdefault.jpg" alt="">
            <p class="text-2xl">Yêu em nhưng không với tới - Bùi Vĩnh Phúc-QA</p>
        </div>
    </a>
    <a  href="/video2" data-navigo="">
        <div class="flex flex-row space-x-4">
            <img class="rounded-lg w-[350px] h-[200px]" src="https://photo-resize-zmp3.zmdcdn.me/w600_r300x169_jpeg/thumb_video/3/c/e/7/3ce7b847cbd3df1e03fc622a2baa73ab.jpg" alt="">
            <p class="text-2xl">Sai người sai thời điểm-Thanh Hung-QA</p>
        </div>
    </a>
    <a  href="/video3">
        <div class="flex flex-row space-x-4">
            <img class="rounded-lg w-[350px] h-[200px]" src="https://i.ytimg.com/vi/4cVwLnG3X5w/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBe_dVE3whVa0YVTwHhZ0LajWyXuw" alt="">
            <p class="text-2xl">Thương thì thôi-JANK</p>
        </div>
    </a>
    <a  href="/video4">
        <div class="flex flex-row space-x-4">
            <img class="rounded-lg w-[350px] h-[200px]" src="https://i.ytimg.com/vi/ir2SF-2dYFo/maxresdefault.jpg" alt="">
            <p class="text-2xl">Giá Như - Bùi Vĩnh Phúc-QA</p>
        </div>
    </a>
            </div>
        </div>
    </div>
    `;
}

function Video1() {
  document.querySelector("#abb").innerHTML = `
        <a href="/video1" data-navigo>
            <div class=" p-8 flex flex-col space-y-4">
                <img class="mt-2 ml-8 rounded-lg w-[1000px] h-[600px]" src="https://i.ytimg.com/vi/iLafAVSleFI/maxresdefault.jpg" alt="">
                <p class="mt-2 ml-8 text-2xl">Yêu em nhưng không với tới - Bùi Vĩnh Phúc-QA</p>
                <div id="info" class="mt-2 ml-8 text-lg">

                </div>
                <button id="copyButton" class="cursor-pointer ml-8 mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
                Copy id
            </button>
            </div>
        </a>
    `;
  setTimeout(() => {
      const linh = window.location.pathname;
      document.getElementById("info").innerText = `Bạn đang xem video có id là ${linh}`;
      document.getElementById("copyButton").addEventListener("click", () => {
        navigator.clipboard.writeText(linh).then(() => {
          alert("Đã copy id: " + linh);
        });
      });
    }, 0);
  }

function Video2() {
    document.querySelector("#abb").innerHTML = `
          <a href="/video2" data-navigo>
              <div class="p-8 flex flex-col space-y-4">
                  <img class="mt-2 ml-8 rounded-lg w-[1000px] h-[600px]" src="https://photo-resize-zmp3.zmdcdn.me/w600_r300x169_jpeg/thumb_video/3/c/e/7/3ce7b847cbd3df1e03fc622a2baa73ab.jpg" alt="">
                  <p class="mt-2 ml-8 text-2xl">Sai người sai thời điểm - Thanh Hưng-QA</p>
                  <div id="info" class="mt-2 ml-8 text-lg"></div>
                  <button id="copyButton" class="cursor-pointer ml-8 mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
                  Copy id
                  </button>
              </div>
          </a>
      `;
  
    setTimeout(() => {
      const linh = window.location.pathname;
      document.getElementById("info").innerText = `Bạn đang xem video có id là ${linh}`;
      document.getElementById("copyButton").addEventListener("click", () => {
        navigator.clipboard.writeText(linh).then(() => {
          alert("Đã copy id: " + linh);
        });
      });
    }, 0);
  }
  function Video3() {
    document.querySelector("#abb").innerHTML = `
          <a href="/video3" data-navigo>
              <div class="p-8 flex flex-col space-y-4">
                  <img class="mt-2 ml-8 rounded-lg w-[1000px] h-[600px]" src="https://i.ytimg.com/vi/4cVwLnG3X5w/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBe_dVE3whVa0YVTwHhZ0LajWyXuw" alt="">
                  <p class="mt-2 ml-8 text-2xl">Thương thì thôi - JANK</p>
                  <div id="info" class="mt-2 ml-8 text-lg"></div>
                  <button id="copyButton" class="cursor-pointer ml-8 mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
                      Copy id
                  </button>
              </div>
          </a>
      `;
  
    requestAnimationFrame(() => {
      const linh = window.location.pathname;
      document.getElementById("info").innerText = `Bạn đang xem video có id là ${linh}`;
      document.getElementById("copyButton").addEventListener("click", () => {
        navigator.clipboard.writeText(linh).then(() => {
          alert("Đã copy id: " + linh);
        });
      });
    });
  }
  
  function Video4() {
    document.querySelector("#abb").innerHTML = `
          <a href="/video4" data-navigo>
              <div class="p-8 flex flex-col space-y-4">
                  <img class="mt-2 ml-8 rounded-lg w-[1000px] h-[600px]" src="https://i.ytimg.com/vi/ir2SF-2dYFo/maxresdefault.jpg" alt="">
                  <p class="mt-2 ml-8 text-2xl">Giá Như - Bùi Vĩnh Phúc-QA</p>
                  <div id="info" class="mt-2 ml-8 text-lg"></div>
                  <button id="copyButton" class="cursor-pointer ml-8 mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
                      Copy id
                  </button>
              </div>
          </a>
      `;
  
    requestAnimationFrame(() => {
      const linh = window.location.pathname;
      document.getElementById("info").innerText = `Bạn đang xem video có id là ${linh}`;
      document.getElementById("copyButton").addEventListener("click", () => {
        navigator.clipboard.writeText(linh).then(() => {
          alert("Đã copy id: " + linh);
        });
      });
    });
  }
  
 
  

export { Video1, Video2,Video3,Video4 };
export default Home;
