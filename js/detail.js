let temp = location.href.split("?");
let detail = decodeURI(temp[1]).split("&");
let price = detail[1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

let info = `<div class="detail_div row">
              <div class="product_img">
                <img src="./images/JSON/${detail[2]}" alt="메인상품이미지" />
              </div>
              <div class="product_ifm">
                <div class="title_store">
                  <a href="#"><span class="accent">리그오브레전드</span>
                  <span class="accent">
                      <i class="fa-solid fa-circle-check"></i> 공식</span>
                  </a>
                  <a href="index.html">
                  <span><i class="fa-solid fa-house"></i> 라이엇스토어</span>
                  </a>
                </div>
                <div class="title_name1">
                  <h2>${detail[0]}</h2>
                </div>
                <div class="title_price">
                  <div class="price">
                    <span>${price}</span>
                  </div>
                  <div class="icon">
                  <span><i class="fa-regular fa-heart"></i></span>
                  <span><i class="fa-solid fa-share-nodes"></i></span>
                  </div>
                </div>
                <div class="title_coupon">
                  <span>이 상품에 적용 가능한<span class="accent_red">5% 할인</span> 쿠폰이 있어요</span>
                  <span class="coupon1">쿠폰받기 <i class="fa-solid fa-download"></i></span>
                </div>
                <div class="title_namebox">
                  <div class="title_day">
                    <div class="title_daytext">
                      <span><i class="fa-solid fa-truck-fast"></i> 내일 8/22(화) 출발 예정
                      </span>
                    </div>
                    <div class="title_daybox">
                      <ul>
                        <li>
                          <div class="dayday">
                            <div class="dday">
                              <span class="dayday1">도착확률정보</span>
                            </div>
                            <div class="ddday">
                              <span class="dayday2">8/22(화) 도착</span>
                              <progress class="gauge" value="78" max="100"></progress>
                              <span class="dayday2">78%</span>
                            </div>
                          </div>
                            <div class="dayinfo">
                              <span>판매자의 평균 배송기간으로 예측되었습니다 (영업일 기준,주말/공휴일 제외)</span>
                            </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="title_name">
                    <span class="title_name1">배송비 주문시 결제</span>
                    <span>CJ택배</span>
                  </div>
                  <div class="title_name">
                    <span>스마일카드 <span class="accent">최대 2%</span> 캐시적립</span>
                  </div>
                  <div class="title_name">
                    <span>신세계포인트 적립</span>
                  </div>
                  <div class="title_name">
                    <span><i class="fa-solid fa-credit-card"></i> 결제수단 즉시할인<span class="accent">
                    최대 10,000원</span></span>
                  </div>
                  <div class="title_name">
                    <span><i class="fa-solid fa-credit-card"></i> 카드무이자</span>
                    <span><i class="fa-regular fa-credit-card"></i> 카드 추가혜택</span>
                  </div>
                </div>
                  <div class="banner">
                    <img src="./images/2207_pc_vip_bn_img_01.png" alt="배너" />
                  </div>
                  <div class="result">
                    <div class="item_number">
                      <span>수량</span>
                    </div>
                    <div class="total">
                      <div class="item_result">
                        <div class="minus"><button class="item_minus">-</button></div>
                        <div class="input"><input type="text" /></div>
                        <div class="plus"><button class="item_plus">+</button></div>
                      </div>
                      <div class="price_result">
                        <span>99000</span>
                      </div>
                    </div>
                    <div class="total_price">
                      <span>99000</span>
                    </div>
                  </div>
                  <div class="btn">
                    <button type="button" class="gift">
                    <i class="fa-solid fa-gift"></i> 선물하기
                    </button>
                    <button type="button" class="cart">
                    <i class="fa-solid fa-cart-shopping"></i> 장바구니
                    </button>
                    <button type="button" class="buy">
                    <i class="fa-regular fa-credit-card"></i> 구매하기
                    </button>
                  </div>
              </div>
              </div>
              <div class="tab">
                <ul>
                  <li><a href="">상세설명</a></li>
                  <li><a href="">구매후기</a></li>
                  <li><a href="">상품문의</a></li>
                  <li><a href="">교환/반품</a></li>
                </ul>
              </div>

              <div class="detail_photo row">
                <img src="./images/${detail[3]}" alt="" />
              </div>
              </div>`;
$(".detail .info").remove();
$(".detail").append(info);
