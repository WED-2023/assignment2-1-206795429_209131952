(self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[]).push([[743],{3009:(e,a,t)=>{var i=t(7854),r=t(7293),o=t(1702),s=t(1340),n=t(3111).trim,l=t(1361),c=i.parseInt,h=i.Symbol,u=h&&h.iterator,p=/^[+-]?0x/i,d=o(p.exec),b=8!==c(l+"08")||22!==c(l+"0x16")||u&&!r((function(){c(Object(u))}));e.exports=b?function(e,a){var t=n(s(e));return c(t,a>>>0||(d(p,t)?16:10))}:c},2261:(e,a,t)=>{"use strict";var i=t(6916),r=t(1702),o=t(1340),s=t(7066),n=t(2999),l=t(2309),c=t(30),h=t(9909).get,u=t(9441),p=t(7168),d=l("native-string-replace",String.prototype.replace),b=RegExp.prototype.exec,g=b,A=r("".charAt),m=r("".indexOf),f=r("".replace),x=r("".slice),B=function(){var e=/a/,a=/b*/g;return i(b,e,"a"),i(b,a,"a"),0!==e.lastIndex||0!==a.lastIndex}(),k=n.BROKEN_CARET,w=void 0!==/()??/.exec("")[1],M=B||w||k||u||p;M&&(g=function(e){var a,t,r,n,l,u,p,M=this,y=h(M),E=o(e),I=y.raw;if(I)return I.lastIndex=M.lastIndex,a=i(g,I,E),M.lastIndex=I.lastIndex,a;var v=y.groups,G=k&&M.sticky,S=i(s,M),D=M.source,V=0,Y=E;if(G&&(S=f(S,"y",""),-1===m(S,"g")&&(S+="g"),Y=x(E,M.lastIndex),M.lastIndex>0&&(!M.multiline||M.multiline&&"\n"!==A(E,M.lastIndex-1))&&(D="(?: "+D+")",Y=" "+Y,V++),t=new RegExp("^(?:"+D+")",S)),w&&(t=new RegExp("^"+D+"$(?!\\s)",S)),B&&(r=M.lastIndex),n=i(b,G?t:M,Y),G?n?(n.input=x(n.input,V),n[0]=x(n[0],V),n.index=M.lastIndex,M.lastIndex+=n[0].length):M.lastIndex=0:B&&n&&(M.lastIndex=M.global?n.index+n[0].length:r),w&&n&&n.length>1&&i(d,n[0],t,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(n[l]=void 0)})),n&&v)for(n.groups=u=c(null),l=0;l<v.length;l++)p=v[l],u[p[0]]=n[p[1]];return n}),e.exports=g},7066:(e,a,t)=>{"use strict";var i=t(9670);e.exports=function(){var e=i(this),a="";return e.hasIndices&&(a+="d"),e.global&&(a+="g"),e.ignoreCase&&(a+="i"),e.multiline&&(a+="m"),e.dotAll&&(a+="s"),e.unicode&&(a+="u"),e.unicodeSets&&(a+="v"),e.sticky&&(a+="y"),a}},2999:(e,a,t)=>{var i=t(7293),r=t(7854),o=r.RegExp,s=i((function(){var e=o("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),n=s||i((function(){return!o("a","y").sticky})),l=s||i((function(){var e=o("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:l,MISSED_STICKY:n,UNSUPPORTED_Y:s}},9441:(e,a,t)=>{var i=t(7293),r=t(7854),o=r.RegExp;e.exports=i((function(){var e=o(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))},7168:(e,a,t)=>{var i=t(7293),r=t(7854),o=r.RegExp;e.exports=i((function(){var e=o("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},3111:(e,a,t)=>{var i=t(1702),r=t(4488),o=t(1340),s=t(1361),n=i("".replace),l=RegExp("^["+s+"]+"),c=RegExp("(^|[^"+s+"])["+s+"]+$"),h=function(e){return function(a){var t=o(r(a));return 1&e&&(t=n(t,l,"")),2&e&&(t=n(t,c,"$1")),t}};e.exports={start:h(1),end:h(2),trim:h(3)}},1361:e=>{e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},9826:(e,a,t)=>{"use strict";var i=t(2109),r=t(2092).find,o=t(1223),s="find",n=!0;s in[]&&Array(1)[s]((function(){n=!1})),i({target:"Array",proto:!0,forced:n},{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),o(s)},1058:(e,a,t)=>{var i=t(2109),r=t(3009);i({global:!0,forced:parseInt!=r},{parseInt:r})},4916:(e,a,t)=>{"use strict";var i=t(2109),r=t(2261);i({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},3318:(e,a,t)=>{"use strict";t.d(a,{ku:()=>n,b6:()=>s,ij:()=>o});t(7658),t(9826),t(1539),t(1058),t(199);var i=t(5352);const r=JSON.parse('[{"id":789654,"image":"https://i0.wp.com/whatjewwannaeat.com/wp-content/uploads/2018/03/Beet-Kubbeh-Matzah-Ball-Soup-6-600x400.jpg?resize=600%2C400","title":"Beet Kubbeh","readyInMinutes":90,"aggregateLikes":120,"vegetarian":true,"vegan":false,"glutenFree":false,"summary":"Enjoy the rich flavors of grandma Beet Kubbeh, a traditional Middle Eastern dish made every friday. One serving contains <b>250 calories</b>, <b>10g of protein</b>, and <b>8g of fat</b>. For <b>$2.50 per serving</b>, this recipe <b>covers 15%</b> of your daily requirements of vitamins and minerals. This recipe serves 6. A blend of beets, bulgur, meat filling, and spices makes this dish both hearty and delicious. 120 people have tried and liked this recipe. It is brought to you by middleeasternrecipes.com. From preparation to the plate, this recipe takes approximately <b>90 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 85%</b>, which is impressive. If you like this recipe, take a look at these similar recipes: <a href=\\"https://spoonacular.com/recipes/beet-kubbeh-1234567\\">Beet Kubbeh</a>, <a href=\\"https://spoonacular.com/recipes/classic-kubbeh-1223456\\">Classic Kubbeh</a>, and <a href=\\"https://spoonacular.com/recipes/vegetarian-kubbeh-1223345\\">Vegetarian Kubbeh</a>.","instructions":["Prepare the Dough: Peel and grate the beets. In a large bowl, mix the grated beets with bulgur, and let it sit for about 30 minutes to allow the bulgur to absorb the moisture. After 30 minutes, add salt and spices to the mixture and knead well to form a dough.","Prepare the Filling: In a separate pan, cook the meat with onions and your choice of spices until fully cooked. Let the meat mixture cool, then shape it into small balls.","Form the Kubbeh: Take a small portion of the beet and bulgur dough and flatten it in your hand. Place a meatball in the center and wrap the dough around it to form a ball. Repeat this process until all the dough and filling are used.","Cook the Kubbeh: In a large pot, bring water to a boil. Gently add the kubbeh balls to the boiling water and cook for about 40-50 minutes until they are fully cooked and the flavors meld together.","Serve: Serve the beet kubbeh hot, garnished with fresh herbs or a squeeze of lemon juice if desired."],"ingredients":["3 beets","1 cup bulgur","1/2 lb ground meat","1 onion","Salt","Spices (to taste)"]},{"id":987654,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVRYmTU2mDUCcME_otQIJT9LfOcNPScrRF_A&s","title":"Molokhia","readyInMinutes":60,"aggregateLikes":200,"vegetarian":false,"vegan":false,"glutenFree":true,"summary":"Molokhia is a traditional Middle Eastern dish made from jute leaves. My grandma makes it every friday. One serving contains <b>180 calories</b>, <b>12g of protein</b>, and <b>8g of fat</b>. For <b>$1.80 per serving</b>, this recipe <b>covers 20%</b> of your daily requirements of vitamins and minerals. This recipe serves 4. A combination of molokhia leaves, chicken, garlic, and spices makes this dish both nutritious and flavorful. 200 people have tried and liked this recipe. It is brought to you by middleeasternrecipes.com. From preparation to the plate, this recipe takes approximately <b>60 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 90%</b>, which is excellent. If you like this recipe, take a look at these similar recipes: <a href=\\"https://spoonacular.com/recipes/molokhia-1234567\\">Molokhia</a>, <a href=\\"https://spoonacular.com/recipes/molokhia-with-chicken-1223456\\">Molokhia with Chicken</a>, and <a href=\\"https://spoonacular.com/recipes/egyptian-molokhia-1223345\\">Egyptian Molokhia</a>.","instructions":["Prepare the Chicken: In a pot, boil the chicken with water and spices until fully cooked. Remove the chicken from the broth, let it cool, then shred it into bite-sized pieces.","Prepare the Molokhia: Wash the molokhia leaves thoroughly and chop them finely.","Cook the Molokhia: In a separate pot, sauté minced garlic in oil until golden brown. Add the chopped molokhia leaves and stir well. Pour in the chicken broth and bring the mixture to a simmer. Add the shredded chicken and let it cook for about 20-30 minutes, stirring occasionally.","Season and Serve: Season the molokhia with salt, pepper, and other spices to taste. Serve hot over rice or with bread."],"ingredients":["1 lb chicken","4 cups water","2 cups molokhia leaves","4 cloves garlic","Salt","Pepper","Spices (to taste)"]},{"id":123456,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReeyrz74ml6HLm8t_dsQTNzuOlQdmkLDmJLw&s","title":"Ma\'amoul Cookies","readyInMinutes":60,"aggregateLikes":200,"vegetarian":true,"vegan":false,"glutenFree":false,"summary":"Indulge in the delightful taste of Ma\'amoul Cookies that my grandma makes every friday, a traditional Middle Eastern treat. Each serving provides <b>150 calories</b>, <b>2g of protein</b>, and <b>8g of fat</b>. At just <b>$0.50 per serving</b>, this recipe satisfies 10% of your daily nutritional needs. This recipe serves 12. These cookies are filled with a mixture of dates, nuts, and spices, creating a heavenly combination of flavors. 200 people have enjoyed and recommended this recipe. It\'s presented by middleeasternrecipes.com. From start to finish, these cookies take approximately <b>60 minutes</b> to make. Considering various factors, this recipe receives a spoonacular score of <b>90%</b>, indicating its high quality. If you love this recipe, explore these similar options: <a href=\\"https://spoonacular.com/recipes/date-filled-cookies-789012\\">Date Filled Cookies</a>, <a href=\\"https://spoonacular.com/recipes/rose-water-cookies-789123\\">Rose Water Cookies</a>, and <a href=\\"https://spoonacular.com/recipes/pistachio-shortbread-cookies-789234\\">Pistachio Shortbread Cookies</a>.","instructions":["Prepare the Filling: Pit and chop the dates finely. In a bowl, mix the chopped dates with nuts and spices to form a paste.","Prepare the Dough: In a separate bowl, prepare the dough by mixing flour, butter, sugar, and a pinch of salt. Knead the dough until it is smooth and pliable.","Shape the Cookies: Take a small portion of the dough and flatten it in your hand. Place a small amount of the date and nut filling in the center of the dough. Fold the dough over the filling and shape it into a ball or mold it into a traditional Ma\'amoul mold if available. Repeat this process until all the dough and filling are used.","Bake the Cookies: Preheat the oven to 350°F (175°C). Place the shaped cookies on a baking sheet lined with parchment paper. Bake the cookies for about 20-25 minutes or until they are lightly golden.","Cool and Serve: Allow the cookies to cool completely on a wire rack. Serve the Ma\'amoul cookies with a dusting of powdered sugar if desired."],"ingredients":["2 cups flour","1 cup butter","1/2 cup sugar","Pinch of salt","1 cup dates","1/2 cup nuts","Spices (to taste)"]}]');function o(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=[],t=0;t<e;t++)a.push(i[t%i.length]);return{data:{recipes:a}}}function s(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=[],t=0;t<e;t++)a.push(r[t%r.length]);return{data:{recipes:a}}}function n(e){var a=r,t=a.find((function(a){return a.id===parseInt(e)}));return{data:{recipe:t||null}}}},199:e=>{"use strict";e.exports=[]},5352:e=>{"use strict";e.exports=JSON.parse('[{"id":716429,"image":"https://img.spoonacular.com/recipes/716429-556x370.jpg","title":"Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs","readyInMinutes":45,"aggregateLikes":209,"vegetarian":true,"vegan":true,"glutenFree":true,"summary":"You can never have too many main course recipes, so give Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs a try. One serving contains <b>543 calories</b>, <b>17g of protein</b>, and <b>16g of fat</b>. For <b>$1.57 per serving</b>, this recipe <b>covers 22%</b> of your daily requirements of vitamins and minerals. This recipe serves 2. A mixture of butter, white wine, pasta, and a handful of other ingredients are all it takes to make this recipe so yummy. 209 people have tried and liked this recipe. It is brought to you by fullbellysisters.blogspot.com. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 83%</b>, which is tremendous. If you like this recipe, take a look at these similar recipes: <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1230187\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229807\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, and <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229669\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>."},{"id":716432,"image":"https://holycowvegan.net/wp-content/uploads/2016/04/lebanese-chickpea-stew-1-1.jpg","title":"Spicy Chickpea Stew","readyInMinutes":40,"aggregateLikes":320,"vegetarian":true,"vegan":true,"glutenFree":true,"summary":"Warm up with a bowl of Spicy Chickpea Stew, a hearty and flavorful dish perfect for vegetarians and vegans. Each serving packs <b>350 calories</b>, <b>14g of protein</b>, and <b>10g of fat</b>. At <b>$1.75 per serving</b>, this recipe <b>covers 30%</b> of your daily vitamin and mineral requirements. This recipe yields 4 servings and is adored by 320 food enthusiasts. This recipe is from spoonacular.com and takes about <b>40 minutes</b> to prepare and cook. It earns a spoonacular score of <b>90%</b>, indicating high satisfaction. For more recipes like this, try <a href=\\"https://spoonacular.com/recipes/spicy-chickpea-stew-1230189\\">Spicy Chickpea Stew</a>, <a href=\\"https://spoonacular.com/recipes/spicy-chickpea-stew-1229809\\">Spicy Chickpea Stew</a>, and <a href=\\"https://spoonacular.com/recipes/spicy-chickpea-stew-1229667\\">Spicy Chickpea Stew</a>."},{"id":716499,"image":"data:image/jpeg;base64,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","title":"Creamy Mushroom Risotto","readyInMinutes":45,"aggregateLikes":413,"vegetarian":true,"vegan":false,"glutenFree":true,"summary":"Indulge in the richness of Creamy Mushroom Risotto, a classic Italian dish with a creamy twist. This recipe is not only delicious but also nutritious, with <b>421 calories</b>, <b>9g of protein</b>, and <b>17g of fat</b> per serving. At <b>$2.13 per serving</b>, it provides <b>17%</b> of your daily vitamin and mineral needs. With 413 likes, this recipe has earned its popularity. From start to finish, it takes about <b>45 minutes</b> to prepare. You can find this recipe and more at spoonacular.com. If you enjoy this recipe, you might also like <a href=\\"https://spoonacular.com/recipes/creamy-mushroom-risotto-1230187\\">Creamy Mushroom Risotto</a>, <a href=\\"https://spoonacular.com/recipes/creamy-mushroom-risotto-1229807\\">Creamy Mushroom Risotto</a>, and <a href=\\"https://spoonacular.com/recipes/creamy-mushroom-risotto-1229669\\">Creamy Mushroom Risotto</a>."}]')}}]);
//# sourceMappingURL=743.84c6cf5d.js.map