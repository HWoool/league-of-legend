let cartLol = JSON.parse(localStorage.getItem("lolItem"));
console.log(cartLol);

function carting() {
  if (cartLol.length) {
    $(".cart_Info p").text("");
    let total = 0;
    let lolList = `<table>
                    <colgroup>
                      <col />
                      <col />
                      <col />
                      <col />
                      <col />
                    </colgroup>
                    <thead>
                      <th>상품이미지</th>
                      <th>상품정보</th>
                      <th>수량</th>
                      <th>금액</th>
                      <th>선택</th>
                    </thead>`;
    lolList += `<tbody>`;
    cartLol.forEach((value, index) => {
      lolList += `<tr>
      <td><img src="./images/JSON/${value.image}" alt="${value.name}"></td>
      <td><span class="np">${
        value.name
      }</span> <br> <span class="pp"> ${value.price
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span></td>
                <td>
                <div class="price_pm">
                  <button type="button" class="item__minus">-</button>
                  <input type="text" value="${
                    value.quantity
                  }" autocomplete="off" class="item__input"/>
                    <button type="button" class="item__plus">+</button>
                </div>
                </td>
                  <td class="pTotal">${(value.quantity * value.price)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                  <td><button type="button" class="remove"><i class="fa-solid fa-xmark"></i></button></td>
                </tr>`;
      total = total + value.quantity * value.price;
    });
    lolList += `</tbody>
                <tfoot>
                <tr>
                <td colspan="5">결제금액 <i class="fa-solid fa-pause fa-rotate-90"></i>  <span class="total_span">${total
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span> </td>
                </tr>
                </tfoot>
                </table>
                <div class="buy_btn order"><button type="text">주문하기</button></div>`;
    $(".cart_section table").remove();
    $(".cart_section .order").remove();
    $(".cart_section").append(lolList);
  } else {
    $(".cart_section table").remove();
    $(".cart_section .order").remove();
    $(".cart_Info p").text("장바구니에 상품이 없습니다.");
  }
}
carting();
// 0~9까지 숫자를 제외한 모든 것(문자,공백 등)을 rep라는 변수에 넣어라
let rep = /[^0-9]/g;

// 장바구니 수량(+) 증가
$("body").on("click", ".item__plus", function () {
  let quantity = $(this).prev().val();
  let mypp = $(this).parent().parent().prev().find(".pp").text();
  mypp = mypp.replace(rep, "");
  let total = 0;
  if (quantity >= 1) {
    quantity = parseInt(quantity);
    $(this).prev().val(++quantity);
    total = quantity * parseInt(mypp);
  } else {
    quantity = 1;
    $(this).prev().val(quantity);
    total = quantity * parseInt(mypp);
  }
  $(this)
    .parent()
    .parent()
    .next()
    .text(total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
  loltotal();
});
// 장바구니 수량(-) 감소
$("body").on("click", ".item__minus", function () {
  let quantity = $(this).next().val();
  let mypp = $(this).parent().parent().prev().find(".pp").text();
  let total = 0;
  mypp = mypp.replace(rep, "");
  if (quantity > 1) {
    quantity = parseInt(quantity);
    $(this).next().val(--quantity);
    total = quantity * parseInt(mypp);
  } else {
    quantity = 1;
    $(this).next().val(quantity);
    total = quantity * parseInt(mypp);
  }
  $(this)
    .parent()
    .parent()
    .next()
    .text(total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
  loltotal();
});

// input 입력칸에 숫자
$("body").on("keyup", ".item__input", function () {
  let quantity = $(this).val();
  let mypp = $(this).parent().parent().prev().find(".pp").text();
  let total = 0;
  mypp = mypp.replace(rep, "");
  if (quantity) {
    quantity = parseInt(quantity);
    $(this).val(quantity);
    total = quantity * parseInt(mypp);
  } else {
    quantity = "";
    $(this).val(quantity);
    total = quantity * parseInt(mypp);
  }
  $(this)
    .parent()
    .parent()
    .next()
    .text(total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
  loltotal();
});

// 금액에 합계
function loltotal() {
  let totalLol = 0;
  $("tbody .pTotal").each(function () {
    let price = $(this).text();
    price = price.replace(rep, "");
    totalLol += parseInt(price);
  });
  $("tfoot .total_span").text(
    totalLol.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  );
}
// 선택항목에 삭제버튼
$("body").on("click", "tbody .remove", function () {
  let lolnum = $(this).parent().parent().index();
  cartLol.splice(lolnum, 1);
  localStorage.setItem("lolItem", JSON.stringify(cartLol));
  carting();
});
