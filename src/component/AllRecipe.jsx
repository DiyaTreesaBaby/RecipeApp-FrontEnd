import React, { useState } from 'react'
import AddNavbar from './AddNavbar'

const AllRecipe = () => {
  const [data, changeData] = useState(
    [
    { "RecipeTitle": "BIRIYANI", "imglink": "https://www.forbesindia.com/media/images/2021/Dec/img_175063_whyisbiryanigettingbrandedalloverthecountry.jpg" },{ "RecipeTitle": "PIZZA", "imglink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcSmn0XG0T3chmzRFSh2pKMFD5_ALy3xl5bmtbNKf_4g&s" },{ "RecipeTitle": "CHOCOLATE CAKE", "imglink": "https://assets.winni.in/product/primary/2023/4/84499.jpeg?dpr=1&w=1000" },{ "RecipeTitle": "VEG SALAD", "imglink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDurvdm14L0ly8-g49U_KAg_J5IbIC96YZjM3_h6R7bw&s" },{ "RecipeTitle": "NOODLES", "imglink": "https://www.cookwithmanali.com/wp-content/uploads/2021/08/Schezwan-Noodles.jpg" },{ "RecipeTitle": "FRIED RICE", "imglink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAIieM6A5yyS1edsuGt62yY8LxIgIy58k4n_JHHfg4hQ&s" },{ "RecipeTitle": "PASTA", "imglink": "https://kathleenashmore.com/wp-content/uploads/2021/02/fusilli3-500x500.jpg" },{ "RecipeTitle": "DOUGHNUTS", "imglink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1qU_BOrXRM4VVmOBzm8lDvofLS_0uuzPdag&s" },{ "RecipeTitle": "ICE CREAM", "imglink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThgA47GHL35jZlaar8KhowAFHlzGWNQ2CDrg&s" },{ "RecipeTitle": "BROWNIES", "imglink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4iAm5QHT_Rqzc0zwppYID3EoqUiXP_bAsrw&s" },{ "RecipeTitle": "MACARONS", "imglink": "https://s.yimg.com/os/en-SG/blogs/fittoposthealth/Food-Cravings-pic.jpg" },{ "RecipeTitle": "BURGER", "imglink": "https://content.jdmagicbox.com/comp/mumbai/v7/0484px484.x484.200331202334.x6v7/catalogue/burger-spot-panampilly-nagar-ernakulam-restaurants-with-offers-kxslbxvk9a.jpg" },{ "RecipeTitle": "SANDWICH", "imglink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo2efreFdl5T0ELvgV-D6ue3KnQJQidKQCXQ&s" },{ "RecipeTitle": "CHICKEN TENDERS", "imglink": "https://www.wellplated.com/wp-content/uploads/2023/05/Oven-Fried-Chicken-Tenders-Recipe.jpg" },{ "RecipeTitle": "SMOOTHIE", "imglink": "https://abeautifulmess.com/wp-content/uploads/2023/04/chocolate-smoothie-recipe.--scaled.jpg" },
]
)
  return (
    <div>
      <AddNavbar />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">

              {data.map(
             ( value,index)=>{

              return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
              <div class="card" >
                <img height="350" src={value.imglink} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{value.RecipeTitle}</h5>
                  <p class="card-text"></p>
                  <a href="#" class="btn btn-primary">buy now</a>
                </div>
              </div>
            </div>
             }
)}



            </div>




          </div>
        </div>
      </div>





    </div>
  )
}

export default AllRecipe