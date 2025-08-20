<template>
  <NuxtLayout name="list">
    <div class="recycleBlock">
      <p class="title">
        碳化鎢硬廢料
      </p>
      <p>各種不同行業包括車間和製造商，我們回收多種形式歡迎下方諮詢</p>
      <NuxtLink>請求報價</NuxtLink>
    </div>
    <div>
      <h3>我們收購的項目</h3>
      回收固體、刨花、M2、M35、M42、T5、T15、D2各式型號歡迎詢問。
      <ul>
        <li>HSS各式工具</li>
        <li>HSS刨花</li>
        <li>M2牙板</li>
        <li>沖棒</li>
        <li>頭尾料</li>
        <li>工具鋼</li>
      </ul>
    </div>
    <div class="flex border-1">
      <div class="flex-1">
        <p>
          請求定價
        </p>
        若您沒有在上面看到您想回收的商品也可以直接聯繫我們喔。
        我們可以輕鬆回收您的鎢廢料。
        提交下面的表格，我們的採購國隊將與您聯繫以討論報償。
        將為您的材料提供最優惠的價格。
      </div>
      <form class="w-50">
        <div>
          <label to="name">聯絡人姓名<input id="name" type="text" /></label>
          <label to="companyName">公司名稱<input id="companyName" type="text" /></label>
        </div>
        <div>
          <label to="email">電子郵件<input id="email" type="text" /></label>
          <label to="phone">電話<input id="phone" type="text" /></label>
        </div>
        <div>
          <label to="country">國家<input id="country" type="text" /></label>
          <label to="zone">州/省/地區<input id="zone" type="text" /></label>
        </div>
        <div>
          <label to="material">材料<input id="material" type="text" /></label>
          <label to="materialCount">材料多少<input id="materialCount" type="text" /></label>
        </div>
        <div>
          <label to="materialImg">上傳素材圖片<input id="materialImg" type="text" /></label>
          <label to="message">訊息<input id="message" type="text" /></label>
        </div>
      </form>
    </div>
  </NuxtLayout>
</template>

<style>
</style>
