import { c as create_ssr_component } from "../../../chunks/ssr.js";
const css = {
  code: '.card-container.svelte-1xblkkk{flex:1;max-width:25%;padding-right:10px;padding-left:10px;box-sizing:border-box}body.svelte-1xblkkk{background-image:url("bg2.jpg");background-size:cover}.card.svelte-1xblkkk{box-sizing:border-box;width:450px;height:650px;background:#ecb03ccc;border:1px solid white;box-shadow:12px 17px 51px rgba(0, 0, 0, 0.22);border-radius:17px;cursor:pointer;transition:all 0.5s;justify-content:center;user-select:none;font-weight:bolder;color:black;margin-top:50px;gap:3px}.card.svelte-1xblkkk:hover{border:1px solid black;transform:scale(1.05)}.card.svelte-1xblkkk:active{transform:scale(0.95) rotateZ(1.7deg)}',
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<body>\\r\\n    <div class=\\"text-white flex justify-center items-center\\">\\r\\n        <h1 class=\\"text-8xl mt-20 font-koho\\">อริยสัจ4</h1>\\r\\n    </div>\\r\\n\\r\\n    <div class=\\"text-5xl flex justify-end\\">\\r\\n        <a href=\\"./ariyasudfour/posttest\\">\\r\\n            <button\\r\\n                class=\\"bg-white mt-4 mr-5 text-[#F1B92E] rounded-lg flex justify-center items-center font-Inria hover:transform hover:scale-105 active:transform active:scale-95 active:rotate-1.7 transition-all duration-500\\"\\r\\n                >Go To Test</button\\r\\n            >\\r\\n        </a>\\r\\n    </div>\\r\\n    <div class=\\"flex\\">\\r\\n        <div class=\\"card-container flex justify-center\\">\\r\\n            <div class=\\"flex card\\">\\r\\n                <div class=\\"text-white\\">\\r\\n                    <h1 class=\\"text-6xl text-center p-4 font-koho\\">ทุกข์</h1>\\r\\n\\r\\n                    <div class=\\"flex justify-center p-4\\">\\r\\n                        <img\\r\\n                            src=\\"n.jpg\\"\\r\\n                            alt=\\"\\"\\r\\n                            class=\\"w-[253px] h-[100px] rounded-xl\\"\\r\\n                        />\\r\\n                    </div>\\r\\n\\r\\n                    <div class=\\"p-3\\">\\r\\n                        <p class=\\"font-koho font-light text-xl\\">\\r\\n                            ทุกข์ คือสภาพที่ทนได้ยาก ความไม่สบายกาย\\r\\n                            ความไม่สบายใจ จำแนกออกเป็น 2 ประเภท คือ 1.ทุกข์ประจำ\\r\\n                            คือ ทุกข์ที่ทุกคนต้อง ประสบ ได้แก่ การเกิด แก่ เจ็บ\\r\\n                            และตาย <br\\r\\n                            />2.ทุกข์จรคือความทุกข์ที่เกิดขึ้นเป็นครั้ง คราว มี\\r\\n                            8 ประการ\\r\\n                            <br />\\r\\n                            1.ความโศก(ความเศร้า)\\r\\n                            <br />\\r\\n                            2.ความพิไรรำพัน(ความบ่นเพ้อ)\\r\\n                            <br />\\r\\n                            3.ความทุกข์ทางกาย(การบาดเจ็บ)\\r\\n                            <br />\\r\\n                            4.ความโทมนัส(ความไม่สบายใจ)\\r\\n                            <br />\\r\\n                            5.ความคับแค้นใจ\\r\\n                            <br />\\r\\n                            6.ความประสบกับสิ่งไม่รัก\\r\\n                            <br />\\r\\n                            7.ความพรดพรากจากสิ่งไม่รัก\\r\\n                            <br />\\r\\n                            8.ความปรารถนาสิ่งใด แต่ไม่ได้\\r\\n                        </p>\\r\\n                    </div>\\r\\n                </div>\\r\\n            </div>\\r\\n        </div>\\r\\n\\r\\n        <div class=\\"card-container flex justify-center\\">\\r\\n            <div class=\\"flex card\\">\\r\\n                <div class=\\"text-white\\">\\r\\n                    <h1 class=\\"text-6xl text-center p-4 font-koho\\">สมุทัย</h1>\\r\\n\\r\\n                    <div class=\\"flex justify-center p-4\\">\\r\\n                        <img\\r\\n                            src=\\"s.jpg\\"\\r\\n                            alt=\\"\\"\\r\\n                            class=\\"w-[253px] h-[100px] rounded-xl\\"\\r\\n                        />\\r\\n                    </div>\\r\\n\\r\\n                    <div class=\\"p-3\\">\\r\\n                        <p class=\\"font-koho font-light text-xl\\">\\r\\n                            สมุทัย คือ สาเหตุที่ทำให้เกิดทุกข์ ได้แก่ ตัญหา\\r\\n                            ความทะยานอยาก จำแนกออดเป็น 3 ประเภท\\r\\n                            <br />\\r\\n                            1.กามตัญหา ความอยากในกาม(รูป, รส, กลิ่น, เสียง, สัมผัส)\\r\\n                            <br />\\r\\n                            2.ภวตัญหา ความอยากเป็น อยากมี\\r\\n\\r\\n                            <br />\\r\\n                            3.วิภวตัญหา ความไม่อยากมี ไม่อยากเป็น\\r\\n                        </p>\\r\\n                    </div>\\r\\n                </div>\\r\\n            </div>\\r\\n        </div>\\r\\n        <div class=\\"card-container flex justify-center\\">\\r\\n            <div class=\\"flex card\\">\\r\\n                <div class=\\"text-white\\">\\r\\n                    <h1 class=\\"text-6xl text-center p-4 font-koho\\">นิโรธ</h1>\\r\\n\\r\\n                    <div class=\\"flex justify-center p-4\\">\\r\\n                        <img\\r\\n                            src=\\"ntwo.jpg\\"\\r\\n                            alt=\\"\\"\\r\\n                            class=\\"w-[253px] h-[100px] rounded-xl\\"\\r\\n                        />\\r\\n                    </div>\\r\\n\\r\\n                    <div class=\\"p-3\\">\\r\\n                        <p class=\\"font-koho font-light text-xl\\">\\r\\n                            นิโรธ คือ การดับทุกข์ หรือการละตัณหา\\r\\n                            <br />\\r\\n                            1.วิกขัมภนนิโรธ หมายถึง การดับกิเลศของท่านผู้บำเพ็ญฌาน\\r\\n                            <br />\\r\\n                            2.ตทังคนิโรธ หมายถึง การดับกิเลศด้วยธรรมที่เป็นคู่ปรับ\\r\\n                            <br />\\r\\n                            3.สมุจเฉทนิโรธ หมายถึง การดับกิเลศเสร้จสิ้นเด็ดขาด\\r\\n                            <br />\\r\\n                            4. ปฏิปันสัทธินิโรธ หมายถึง การดับกิเลศแล้วไม่ขวนขวายเพื่อดับอีก\\r\\n                            <br />\\r\\n                            5. นิสสรณนิโรธ หมายถึง ดับกิเลสเสร็จสิ้นแล้ว แล้วอยู่ในภาวะที่ดับกิเลสแล้วนั้น\\r\\n                            ภาวะนั้นคือ นิพพาน\\r\\n                        </p>\\r\\n                    </div>\\r\\n                </div>\\r\\n            </div>\\r\\n        </div>\\r\\n        <div class=\\"card-container flex justify-center\\">\\r\\n            <div class=\\"flex card\\">\\r\\n                <div class=\\"text-white\\">\\r\\n                    <h1 class=\\"text-6xl text-center p-4 font-koho\\">มรรค</h1>\\r\\n\\r\\n                    <div class=\\"flex justify-center p-4\\">\\r\\n                        <img\\r\\n                            src=\\"m.jpg\\"\\r\\n                            alt=\\"\\"\\r\\n                            class=\\"w-[253px] h-[100px] rounded-xl\\"\\r\\n                        />\\r\\n                    </div>\\r\\n\\r\\n                    <div class=\\"p-3\\">\\r\\n                        <p class=\\"font-koho font-light text-xl\\">\\r\\n                            มรรค คือ หนทางนำไปสู่ความดับทุกข์ อันได้แก่\\r\\n                            อริยมรรคมีองค์ 8\\r\\n                            <br />\\r\\n                            1. สัมมาทิฏฐิ ตือ การรู้นอริยสัจ 4 อย่างถูกต้อง\\r\\n                            <br />\\r\\n                            2. สัมมาสังกัปปะ คือ ไม่หลงใหลกับรูป เสียง กลิ่น รส สัมผัส<br\\r\\n                            />\\r\\n                            3. สัมมาวาจา คือ เว้นจากการพูดเพ้อเท็จ พูดส่อเสียด\\r\\n                            <br />\\r\\n                            4. สัมมากัมมันตะ คือ เว้นจากการฆ่าสัตว์ ลักทรัพย์ ประพฤติผิดในกาม\\r\\n                            <br />\\r\\n                            5. สัมมาอาชีพ คือ การประกอบอาชีพสุจริต <br />\\r\\n                            6. สัมมาวายามะ คือ การเพียรพยายาม <br />\\r\\n                            7. สัมมาสติ คือ การมีสติอยู่ตลอดเวลา <br />\\r\\n                            8. สัมมาสมาธิ คือ การตั้งใจมั่นในทางถูก\\r\\n                        </p>\\r\\n                    </div>\\r\\n                </div>\\r\\n            </div>\\r\\n        </div>\\r\\n    </div>\\r\\n</body>\\r\\n\\r\\n<style>\\r\\n    .card-container {\\r\\n        flex: 1;\\r\\n        max-width: 25%;\\r\\n        padding-right: 10px;\\r\\n        padding-left: 10px;\\r\\n        box-sizing: border-box;\\r\\n    }\\r\\n\\r\\n    body {\\r\\n        background-image: url(\\"bg2.jpg\\");\\r\\n        background-size: cover;\\r\\n    }\\r\\n    .card {\\r\\n        box-sizing: border-box;\\r\\n        width: 450px;\\r\\n        height: 650px;\\r\\n\\r\\n        background: #ecb03ccc;\\r\\n\\r\\n        border: 1px solid white;\\r\\n        box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);\\r\\n        border-radius: 17px;\\r\\n\\r\\n        cursor: pointer;\\r\\n        transition: all 0.5s;\\r\\n\\r\\n        justify-content: center;\\r\\n        user-select: none;\\r\\n        font-weight: bolder;\\r\\n        color: black;\\r\\n        margin-top: 50px;\\r\\n        gap: 3px;\\r\\n    }\\r\\n\\r\\n    .card:hover {\\r\\n        border: 1px solid black;\\r\\n        transform: scale(1.05);\\r\\n    }\\r\\n\\r\\n    .card:active {\\r\\n        transform: scale(0.95) rotateZ(1.7deg);\\r\\n    }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA6JI,8BAAgB,CACZ,IAAI,CAAE,CAAC,CACP,SAAS,CAAE,GAAG,CACd,aAAa,CAAE,IAAI,CACnB,YAAY,CAAE,IAAI,CAClB,UAAU,CAAE,UAChB,CAEA,mBAAK,CACD,gBAAgB,CAAE,cAAc,CAChC,eAAe,CAAE,KACrB,CACA,oBAAM,CACF,UAAU,CAAE,UAAU,CACtB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CAEb,UAAU,CAAE,SAAS,CAErB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CACvB,UAAU,CAAE,IAAI,CAAC,IAAI,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAC9C,aAAa,CAAE,IAAI,CAEnB,MAAM,CAAE,OAAO,CACf,UAAU,CAAE,GAAG,CAAC,IAAI,CAEpB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,IAAI,CACjB,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,KAAK,CACZ,UAAU,CAAE,IAAI,CAChB,GAAG,CAAE,GACT,CAEA,oBAAK,MAAO,CACR,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CACvB,SAAS,CAAE,MAAM,IAAI,CACzB,CAEA,oBAAK,OAAQ,CACT,SAAS,CAAE,MAAM,IAAI,CAAC,CAAC,QAAQ,MAAM,CACzC"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<body class="svelte-1xblkkk" data-svelte-h="svelte-85cv1y"><div class="text-white flex justify-center items-center"><h1 class="text-8xl mt-20 font-koho">อริยสัจ4</h1></div> <div class="text-5xl flex justify-end"><a href="./ariyasudfour/posttest"><button class="bg-white mt-4 mr-5 text-[#F1B92E] rounded-lg flex justify-center items-center font-Inria hover:transform hover:scale-105 active:transform active:scale-95 active:rotate-1.7 transition-all duration-500">Go To Test</button></a></div> <div class="flex"><div class="card-container flex justify-center svelte-1xblkkk"><div class="flex card svelte-1xblkkk"><div class="text-white"><h1 class="text-6xl text-center p-4 font-koho">ทุกข์</h1> <div class="flex justify-center p-4"><img src="n.jpg" alt="" class="w-[253px] h-[100px] rounded-xl"></div> <div class="p-3"><p class="font-koho font-light text-xl">ทุกข์ คือสภาพที่ทนได้ยาก ความไม่สบายกาย
                            ความไม่สบายใจ จำแนกออกเป็น 2 ประเภท คือ 1.ทุกข์ประจำ
                            คือ ทุกข์ที่ทุกคนต้อง ประสบ ได้แก่ การเกิด แก่ เจ็บ
                            และตาย <br>2.ทุกข์จรคือความทุกข์ที่เกิดขึ้นเป็นครั้ง คราว มี
                            8 ประการ
                            <br>
                            1.ความโศก(ความเศร้า)
                            <br>
                            2.ความพิไรรำพัน(ความบ่นเพ้อ)
                            <br>
                            3.ความทุกข์ทางกาย(การบาดเจ็บ)
                            <br>
                            4.ความโทมนัส(ความไม่สบายใจ)
                            <br>
                            5.ความคับแค้นใจ
                            <br>
                            6.ความประสบกับสิ่งไม่รัก
                            <br>
                            7.ความพรดพรากจากสิ่งไม่รัก
                            <br>
                            8.ความปรารถนาสิ่งใด แต่ไม่ได้</p></div></div></div></div> <div class="card-container flex justify-center svelte-1xblkkk"><div class="flex card svelte-1xblkkk"><div class="text-white"><h1 class="text-6xl text-center p-4 font-koho">สมุทัย</h1> <div class="flex justify-center p-4"><img src="s.jpg" alt="" class="w-[253px] h-[100px] rounded-xl"></div> <div class="p-3"><p class="font-koho font-light text-xl">สมุทัย คือ สาเหตุที่ทำให้เกิดทุกข์ ได้แก่ ตัญหา
                            ความทะยานอยาก จำแนกออดเป็น 3 ประเภท
                            <br>
                            1.กามตัญหา ความอยากในกาม(รูป, รส, กลิ่น, เสียง, สัมผัส)
                            <br>
                            2.ภวตัญหา ความอยากเป็น อยากมี

                            <br>
                            3.วิภวตัญหา ความไม่อยากมี ไม่อยากเป็น</p></div></div></div></div> <div class="card-container flex justify-center svelte-1xblkkk"><div class="flex card svelte-1xblkkk"><div class="text-white"><h1 class="text-6xl text-center p-4 font-koho">นิโรธ</h1> <div class="flex justify-center p-4"><img src="ntwo.jpg" alt="" class="w-[253px] h-[100px] rounded-xl"></div> <div class="p-3"><p class="font-koho font-light text-xl">นิโรธ คือ การดับทุกข์ หรือการละตัณหา
                            <br>
                            1.วิกขัมภนนิโรธ หมายถึง การดับกิเลศของท่านผู้บำเพ็ญฌาน
                            <br>
                            2.ตทังคนิโรธ หมายถึง การดับกิเลศด้วยธรรมที่เป็นคู่ปรับ
                            <br>
                            3.สมุจเฉทนิโรธ หมายถึง การดับกิเลศเสร้จสิ้นเด็ดขาด
                            <br>
                            4. ปฏิปันสัทธินิโรธ หมายถึง การดับกิเลศแล้วไม่ขวนขวายเพื่อดับอีก
                            <br>
                            5. นิสสรณนิโรธ หมายถึง ดับกิเลสเสร็จสิ้นแล้ว แล้วอยู่ในภาวะที่ดับกิเลสแล้วนั้น
                            ภาวะนั้นคือ นิพพาน</p></div></div></div></div> <div class="card-container flex justify-center svelte-1xblkkk"><div class="flex card svelte-1xblkkk"><div class="text-white"><h1 class="text-6xl text-center p-4 font-koho">มรรค</h1> <div class="flex justify-center p-4"><img src="m.jpg" alt="" class="w-[253px] h-[100px] rounded-xl"></div> <div class="p-3"><p class="font-koho font-light text-xl">มรรค คือ หนทางนำไปสู่ความดับทุกข์ อันได้แก่
                            อริยมรรคมีองค์ 8
                            <br>
                            1. สัมมาทิฏฐิ ตือ การรู้นอริยสัจ 4 อย่างถูกต้อง
                            <br>
                            2. สัมมาสังกัปปะ คือ ไม่หลงใหลกับรูป เสียง กลิ่น รส สัมผัส<br>
                            3. สัมมาวาจา คือ เว้นจากการพูดเพ้อเท็จ พูดส่อเสียด
                            <br>
                            4. สัมมากัมมันตะ คือ เว้นจากการฆ่าสัตว์ ลักทรัพย์ ประพฤติผิดในกาม
                            <br>
                            5. สัมมาอาชีพ คือ การประกอบอาชีพสุจริต <br>
                            6. สัมมาวายามะ คือ การเพียรพยายาม <br>
                            7. สัมมาสติ คือ การมีสติอยู่ตลอดเวลา <br>
                            8. สัมมาสมาธิ คือ การตั้งใจมั่นในทางถูก</p></div></div></div></div></div> </body>`;
});
export {
  Page as default
};
