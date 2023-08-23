function usedata(cate) {
  let newdata = data.filter((value) => value.category == cate);
  //   console.log(newdata);

  let dir = `<ul class="wrap_item">`;

  newdata.forEach((value) => {
    dir += `
            <li>
            <div class="box_item">
            <span class="option new" ::before>
            <span class="option_text">NEW</span>
            </span>
            </div>
            <div class="item_img">
            <img src="./images/01_special/${value.image}" alt="${value.name}" />
              <div class="back">
                <a href="#"><i class="fas fa-search"></i></a>
                <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
              </div>
            </div>
            <div class="item_name">
              <p class="txt">${value.name}</p>
              <b>${value.price}</b>
            </div>
            </li>
            `;
  });
  dir += `</ul>`;

  //   $(".wrap_good .wrap_good_items .wrap_item").remove();
  $(".wrap_good .wrap_good_items").append(dir);
}
