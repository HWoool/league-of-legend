function usedata(cate) {
  let newdata = data.filter((value) => value.category == cate);
  console.log(newdata);

  let dir = `<h2 class="title1_h2">${cate}</h2>`;
  dir += `<div class="wrap_good_items">
             <ul class="wrap_item">`;
  newdata.forEach((value) => {
    dir += `<li>
            <div class="box_item">
            <span class="option new"::before>
            <span class="option_text">NEW</span>
            </span>
            </div>
            <div class="item_img">
              <img src="./images/JSON/${value.image}" alt="${value.name}" />
                <div class="back">
                  <a href="./detail.html?${value.name}&${value.price}&${
      value.image
    }&${value.infoimg}">
                <i class="fas fa-search"></i></a>
                <a href="./cart.html"><i class="fa-solid fa-cart-shopping"></i></a>
              </div>
            </div>
            <div class="item_name">
              <p class="txt">${value.name}</p>
              <b>${value.price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</b>
            </div>
            </li>`;
  });
  dir += `</ul>
          </div>`;
  $(".title1_h2").remove();
  $(".wrap_good .wrap_good_items").remove();
  $(".wrap_good").append(dir);
}
$(".wrap_nav .nav_list a").on("click", function () {
  let text = $(this).text();
  usedata(text);
});
