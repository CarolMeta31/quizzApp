import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 
  categories =['soccer','movies','history'];
//SOCCER ANSWERS
 answerS1='france';
 answerS2='maradona';
 answerS3='brazil';
 answerS4='manchester';
 answerS5='realmadrid';
 scoreSoccer1=0;
 scoreSoccer2=0
 scoreSoccer3=0
 scoreSoccer4=0
 scoreSoccer5=0
 totalSoccerScore:number;
 soccerAns1:string;
 soccerAns2:string;
 soccerAns3:string;
 soccerAns4:string;
 soccerAns5:string;
//MOVIE ANSWERS
 answerM1='paul';
 answerM2='avatar';
 answerM3='seven';
 answerM4='cherlize';
 answerM5='clarke';
score1=0;
score2=0;
score3=0;
score4=0;
score5=0;
movieAns1:string;
movieAns2:string;
movieAns3:string;
movieAns4:string;
movieAns5:string;

totalMovieScore:number;
//history
answerH1='jan';
 answerH2='cullinan';
 answerH3='dingaane';
 answerH4='kruger';
 answerH5='goodhope';
scoreHistroy1=0;
scoreHistroy2=0;
scoreHistroy3=0;
scoreHistroy4=0;
scoreHistroy5=0;
historyAns1:string;
historyAns2:string;
historyAns3:string;
historyAns4:string;
historyAns5:string;
totalHistoryScore:number;


  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }
             checkSoccerAns1():number{

              if(this.soccerAns1==this.answerS1){
                this.scoreSoccer1=2;
              }
              return this.scoreSoccer1;
             }
             checkSoccerAns2():number{

              if(this.soccerAns2==this.answerS2){
                this.scoreSoccer2=2;
              }
              return this.scoreSoccer2;
             }
             checkSoccerAns3():number{

              if(this.soccerAns3==this.answerS3){
                this.scoreSoccer3=2;
              }
              return this.scoreSoccer3;
             }
             checkSoccerAns4():number{

              if(this.soccerAns4==this.answerS4){
                this.scoreSoccer4=2;
              }
              return this.scoreSoccer4;
             }
             checkSoccerAns5():number{

              if(this.soccerAns5==this.answerS5){
                this.scoreSoccer5=2;
              }
              return this.scoreSoccer5;
             }


             totalSoccerScores():void{
               this.totalSoccerScore=  this.checkSoccerAns1()+  this.checkSoccerAns2()+ this.checkSoccerAns3()+ this.checkSoccerAns4()+  this.checkSoccerAns5();
             }
  //movie
        checkMovieAns1():number{
          if (this.movieAns1==this.answerM1){
            this.score1=2;
          }
           return this.score1;
        }
        checkMovieAns2():number{
          if (this.movieAns2==this.answerM2){
            this.score2=2;
          }
           return this.score2;
        }
        checkMovieAns3():number{
          if (this.movieAns3==this.answerM3){
            this.score3=2;
          }
           return this.score3;
        }
        checkMovieAns4():number{
          if (this.movieAns4==this.answerM4){
            this.score4=2;
          }
           return this.score4;
        }
        checkMovieAns5():number{
          if (this.movieAns5==this.answerM5){
            this.score5=2;
          }
           return this.score5;
        }
        totalMovieScores():void{
                this.totalMovieScore=this.checkMovieAns1()+ this.checkMovieAns2()+this.checkMovieAns3()+this.checkMovieAns4()+this.checkMovieAns5();
       }
   
  //history
     checkHistoryAns1():number{
    if (this.historyAns1==this.answerH1){
      this.scoreHistroy1=2;
    }
     return this.scoreHistroy1;
  }
  checkHistoryAns2():number{
    if (this.historyAns2==this.answerH2){
      this.scoreHistroy2=2;
    }
     return this.scoreHistroy2;
  }
  checkHistoryAns3():number{
    if (this.historyAns3==this.answerH3){
      this.scoreHistroy3=2;
    }
     return this.scoreHistroy3;
  }
  checkHistoryAns4():number{
    if (this.historyAns4==this.answerH4){
      this.scoreHistroy4=2;
    }
     return this.scoreHistroy4;
  }
  checkHistoryAns5():number{
    if (this.historyAns5==this.answerH5){
      this.scoreHistroy5=2;
    }
     return this.scoreHistroy5;
  }
  totalHistoryScores():void{
          this.totalHistoryScore=this.checkHistoryAns1()+ this.checkHistoryAns2()+this.checkHistoryAns3()+this.checkHistoryAns4()+this.checkHistoryAns5();
 }
}

