let cartLol = JSON.parse(localStorage.getItem("lolItem"));
console.log(cartLol);

function carting() {
  if (cartLol.length) {
    $(".cart_info p").text("");
    let total = 0;
    let lolList = ` <table border="1">
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
              <td><img src="./images/${value.image}" alt="${value.name}"></td>
              <td>${value.name} <br> <span class="pp">${value.price}</span></td>
                <td>
                <button type="button" class="item_plus">+</button>
                <input type="text" value="${
                  value.quantity
                }" autocomplete="off" class="item_input">
                  <button type="button" class="item_minus">-</button>
                </td>
                  <td class="pTotal">${value.quantity * value.price}</td>
                  <td><button type="button" class="remove"><i class="fa-solid fa-xmark"></i></button></td>
                </tr>`;
      total = total + value.quantity * value.price;
    });
    lolList += `</tbody>
                <tfoot>
                <tr>
                <td colspan="5">합계 : <span>${total}</span> </td>
                </tr>
                </tfoot>
                </table>
                <div class="buy_btn"><button type="text">주문하기</button></div>`;
  }
}
