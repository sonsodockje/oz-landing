import { useScroll } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  function onScroll() {
    console.log(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="nav-wrap">
        <nav>
          <div>로고이다</div>
          <div>
            <ul>
              <li>
                <a href="#">메뉴일</a>
              </li>
              <li>
                <a href="#">메뉴이</a>
              </li>
              <li>
                <a href="#">메뉴삼</a>
              </li>
              <li>
                <a href="#">메뉴사</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="page" id="1">
        <div className="backgound-text">
          이것은 예쁜
          <br />
          배경
          <br />
          텍스트 이다.
        </div>
      </div>
      <div className="page s2" id="2">
        <div className="card-stop-area">
          <div className="card-drop">
            <div className="card-secion">
              <h1>카드의 제목이다.</h1>
              <div className="card-wrap">
                <div className="card">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1676968002784-a12d205a3d4c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
                    alt=""
                  />
                  <h4>소제목이다.</h4>
                  <p>내용 되겠다 내용 내용 내용</p>
                </div>
                <div className="card">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1676968002784-a12d205a3d4c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
                    alt=""
                  />
                  <h4>소제목이다.</h4>
                  <p>내용 되겠다 내용 내용 내용</p>
                </div>
                <div className="card">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1676968002784-a12d205a3d4c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
                    alt=""
                  />
                  <h4>소제목이다.</h4>
                  <p>내용 되겠다 내용 내용 내용</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>더 해라</div>
      </div>

      <div className="page long" id="3">
        <div className="drop-stop-area">
          <div className="drop">
            <div className="drop-content">
              <div>test</div>
            </div>
          </div>
        </div>
      </div>
      <div className="page" id="4">
        4
      </div>
      <footer>
        <div>푸터이다.</div>
      </footer>
    </>
  );
}

export default App;
