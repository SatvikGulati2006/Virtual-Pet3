class Food {

    constructor() {
        var foodStock, lastFed , milk;
        var fedTime, foodObj;

        this.button1= createButton('Feed Pet');
        this.button2= createButton('Add Food');

        this.getFoodStock();
        this.updateFoodStock();
        this.deductFood();

    }
    milk =loadImage('images'/'milk.png');

    display(){
        this.milk.addImage(milk.png);
      
        fill(255,255,254);
        textSize(15);
        if(lastFed>=12){
            text("Last Feed:" +lastFed%12 + "PM", 350,30);
          }else if(lastFed =0) {
              text("Last Feed : 12AM" ,350,30);
          }else{
            text("Last Feed:" +lastFed+ "AM" ,350,30);
          }
            
    }

    bedroom(){

        background(bedroom,550,500);
    }
    garden(){

        background(garden,550,500);
    }
    washroom(){

        background(washroom,550,500);
    }

        
}


