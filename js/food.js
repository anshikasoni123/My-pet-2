class Food
{
    constructor()
    {
        this.foodStock = 0;
        this.image = loadImage("images/Milk.png")
        this.lastFed;
    }

     updateFoodStock(foodStock)
     {
         this.foodStock = foodStock;
     }

     getFedTime(lastFed)
     {
         this.lastFed = lastFed;
     }

     deductFood()
     {
         if(this.foodStock > 0)
         {
             this.foodStock = this.foodStock - 1;
         }
     }

    getFoodStock()
    {
      return this.foodStock;
    }

    display()
    {
        var x = 80, y = 100;

        imageMode(CENTER)
        image(this.image , 1100, 350, 100, 100)

        if(this.foodStock != 0)
        {
            for(var i = 0; i < this.foodStock; i++)
            {
                if(i % 10 == 0)
                {
                x = 80;
                y = y + 100;
                }
                image(this.image, x, y, 100, 100)
                x = x + 50;
            }
        }
    }
}