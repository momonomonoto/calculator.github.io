import React from 'react';
import '../styles/style.less'
const Shop = React.createClass({

    getInitialState: function(){
        return { 
            total: 0,
            definition:'',
            inputDel:0,
            radio:'',
            arr:[],
            sale: 0,
            saleName:'Не требуется',
            arrDefinition1:[],
            inputDel1:0,
            inputDel2:0,
            inputDel3:0,
            inputDel4:0,
            inputDel5:0,
            inputCount1:0,
            inputCount2:0,
            inputCount3:0,
            inputCount4:0,
            arrInputDel1:[],
            arrInputDel2:[],
            arrInputDel3:[],
            arrInputDel4:[],
            arrInputDel5:[],
          };
    },


    addTotal: function( price ){
        this.setState( { total: this.state.total + price } );
    },

    avtoChange: function( price,saleName ){
        this.setState( { sale: price } );
        this.setState( { saleName: saleName } );
    },


    definitionTotal: function(number) {

        if (this.state.arrDefinition1.indexOf(number)!==-1) {
            this.setState(this.state.arrDefinition1.splice(this.state.arrDefinition1.indexOf(number), 1));
        }

        else {
            this.setState(this.state.arrDefinition1.push (number)); 
        }
        this.setState( { definition: number} );


    },
   

    inputTotalOne: function(number,name,count) {
        this.setState( {inputName1: name} );
        this.setState( {inputDel1: number} );
        this.setState( {inputCount1: count} );

        if (this.state.arrInputDel1.indexOf(this.state.inputName1)!==-1&&number<=0) {
            this.setState(this.state.arrInputDel1.splice(this.state.arrInputDel1.indexOf(this.state.inputName1), 1));
        }

        else if (this.state.arrInputDel1.indexOf(name)==-1&&number>0) {
            this.state.arrInputDel1.push(name);
        }
    },

    inputTotalTwo: function(number,name,count) {

        this.setState( {inputName2: name} );
        this.setState( {inputDel2: number} );
        this.setState( {inputCount2: count} );


        if (this.state.arrInputDel2.indexOf(this.state.inputName2)!==-1&&number<=0) {
            this.setState(this.state.arrInputDel2.splice(this.state.arrInputDel2.indexOf(this.state.inputName2), 1));
        }

        else if (this.state.arrInputDel2.indexOf(name)==-1&&number>0) {
            this.state.arrInputDel2.push(name);
        }

    },

    inputTotalThree: function(number,name,count) {
        this.setState( {inputName3: name} );
        this.setState( {inputDel3: number} );
        this.setState( {inputCount3: count} );


        if (this.state.arrInputDel3.indexOf(this.state.inputName3)!==-1&&number<=0) {
            this.setState(this.state.arrInputDel3.splice(this.state.arrInputDel3.indexOf(this.state.inputName3), 1));
        }

        else if (this.state.arrInputDel3.indexOf(name)==-1&&number>0) {
            this.state.arrInputDel3.push(name);
        }

    },
    inputTotalFour: function(number,name,count) {
        this.setState( {inputName4: name} );
        this.setState( {inputDel4: number} );
        this.setState( {inputCount4: count} );

        if (this.state.arrInputDel4.indexOf(this.state.inputName4)!==-1&&number<=0) {
            this.setState(this.state.arrInputDel4.splice(this.state.arrInputDel4.indexOf(this.state.inputName4), 1));
        }

        else if (this.state.arrInputDel4.indexOf(name)==-1&&number>0) {
            this.state.arrInputDel4.push(name);
        }
    },


   	radioChange: function(name) {
        this.setState( {radio:name} );
    },


    render: function() {

        if (this.state.inputCount1==0) {
            this.state.inputCount1='';
        }

        if (this.state.inputCount2==0) {
            this.state.inputCount2='';
        }

        if (this.state.inputCount3==0) {
            this.state.inputCount3='';
        }

        if (this.state.inputCount4==0) {
            this.state.inputCount4='';
        }
        let avto = [
            { name: 'Подиум под селектор передач', price:5000},
            { name: 'Установка приборной панели от Toyota', price:5000},
            { name: 'Установка вибро и шумоизоляции', price:5000 },
            { name: 'Установка двигателя на газе', price:33000},
            { name: 'Изготовление специального шланга высокого давления ГУР', price:3000},
            { name: 'Установка тихого и надежного глушителя', price:22000}
        ];

        let self = this;

 		let  avtoSale =  avto.map(function(s){
        return <Extra name={s.name} price={s.price}  active={s.active} addTotal={self.addTotal}  definitionTotal = {self.definitionTotal} definitionTotalTwo={self.definitionTotalTwo} definitionTotalThree={self.definitionTotalThree} 
        definitionTotalFour={self.definitionTotalFour}  definitionTotalFive={self.definitionTotalFive} definitionTotalSix={self.definitionTotalFive}  />;
        });

        let valuesale = <Value inputTotalThree={self.inputTotalThree} inputTotalFour={self.inputTotalFour} inputTotalFive={self.inputTotalFive} inputTotalTwo={self.inputTotalTwo} inputTotalOne={self.inputTotalOne} />

        let radioNow = <RadioSet avtoChange={self.avtoChange}  radioChange ={self.radioChange} addTotal={self.addTotal} />;
        

        let arr1 = this.state.arrDefinition1[0];
        let arr2 = this.state.arrDefinition1[1];
        let arr3 = this.state.arrDefinition1[2];
        let arr4 = this.state.arrDefinition1[3];
        let arr5 = this.state.arrDefinition1[4];
        let arr6 = this.state.arrDefinition1[5];

        let avtoSet = this.state.sale;

        return (
            <div>
                <h1 className="calculator__title">Калькулятор</h1>
                <h2>Каков марки ваш автомобиль?</h2>
                <p>{radioNow}</p>
            	<p class="b-main">{this.state.radio}</p>
				<h2> Дополнительные опции</h2>
				<div className="calculator__avtosale-selection" id="avtosale">
            	   <p>{avtoSale}</p>
            	</div>
                {valuesale}
                <div>
         		    <div className="calculator__option-addition">
                        <span>Двигатель:</span>
                        <p>Доп. опции: </p>
                    </div>
                    <div className="calculator__option-change" id="avtosale__addition">
                        <span><b> {this.state.saleName}</b></span>
                        <p>{arr1}</p> 
                        <p>{arr2}</p> 
                        <p>{arr3}</p> 
                        <p>{arr4}</p> 
                        <p>{arr5}</p> 
                        <p>{arr6}</p> 
                        <p><span>{this.state.arrInputDel1+' '}</span><span>{this.state.inputCount1}</span></p>
                        <p><span>{this.state.arrInputDel2+' '}</span><span>{this.state.inputCount2}</span></p>
                        <p><span>{this.state.arrInputDel3+' '}</span><span>{this.state.inputCount3}</span></p>
                        <p><span>{this.state.arrInputDel4+' '}</span><span>{this.state.inputCount4}</span></p>   
                    </div>   
                </div>
                <div id="total">
                    <span  className="calculator__option-price-name">ИТОГО:</span> 
                    <span className="calculator__option-price"><b>{this.state.inputDel1+this.state.inputDel2+this.state.inputDel3+this.state.inputDel4+this.state.total+this.state.sale} Р</b></span>
                </div>
            </div>
        );
    }
});


const Avto = React.createClass({
	getInitialState: function(){
        return { active: false };
    },

    clickHandler: function (){

        let active = !this.state.active;

        this.setState({ active: active });

        let radioPrice = Number(this.props.price);

        this.props.avtoChange(active?radioPrice:0,active?this.props.name:'Не требуется');
    },
    render: function(){
        return 	(
            <div className="calculator__avto-button">
				<button price="2" className="calculator__avto-check" onClick={this.clickHandler} >
				 <b>{this.props.name}</b>
				</button>
			</div>
        );
    }
});



const RadioSet = React.createClass({

	getInitialState: function(){
        return { active: false,
            nameRadio:'1',
            totalRadio:0,
            mark:'ГАЗель',
            aboutMark:'',
            aboutMarkMain:'1JZ-GE',
            display:'block',
            backgroundColor1:'white',
            backgroundColor2:'white',
            backgroundColor3:'white',
            activeButton1:false,
            activeButton2:false,
            activeButton3:false
        };
    },

    addTotalRadio: function(e){
        this.setState( { totalRadio:this.state.totalRadio+e } );
    },


	clickShow: function(event) {  



        let arr= [
            { mark:'ГАЗель',display:'block', aboutMarkMain:'1JZ-GE', activeButton:true, name: [<Avto price="170000" name="1JZ-GE" active={this.state.active} avtoChange={this.props.avtoChange}  />,<Avto price="185000" active={this.state.active} name="2JZ-GE" avtoChange={this.props.avtoChange}  />,<Avto price="205000" name="1UZ-FE" active={this.state.active} avtoChange={this.props.avtoChange}  />,<Avto name="5VZ-FE" active={this.state.active} avtoChange={this.props.avtoChange}  price="215000"/>], price:9900 },
            { mark:'FORD',display:'none', aboutMarkMain:'1UZ-FE', activeButton:true, name: [<Avto price="230000" name="2JZ-GE" active={this.state.active} avtoChange={this.props.avtoChange}  />,<Avto price="250000" name="1UZ-FE" active={this.state.active} avtoChange={this.props.avtoChange} />], price:1000, global1:'f',global2:2  },
            { mark:'Mercedes',display:'none', aboutMarkMain:'1UZ-FE', activeButton:true, name: [<Avto price="230000" name="2JZ-GE" active={this.state.active} avtoChange={this.props.avtoChange}  />,<Avto price="250000" name="1UZ-FE" active={this.state.active} avtoChange={this.props.avtoChange} />], price:10500, global1:'4',global2:3  },
        ];


        let active = !this.state.active;
        this.setState({ active: active });



            let oneButton = arr[event.target.value].activeButton;


            let b  = event.target.value;

            if (b==0) { 
                this.setState( {backgroundColor1:'gray'} );
                this.setState( {backgroundColor2:'white'} );
                this.setState( {backgroundColor3:'white'} );
            }
            else if (b==0) {
                this.setState( {backgroundColor1:'white'} );
                this.setState( {backgroundColor2:'gray'} );
                this.setState( {backgroundColor3:'gray'} );
            }


            if (b==1) { 
                this.setState( {backgroundColor2:'gray'} );
                this.setState( {backgroundColor1:'white'} );
                this.setState( {backgroundColor3:'white'} );
            }

            else if (b==1) {
                this.setState( {backgroundColor2:'white'} );
                this.setState( {backgroundColor1:'gray'} );
                this.setState( {backgroundColor3:'gray'} );
            }


            if (b==2) { 
                this.setState( {backgroundColor2:'white'} );
                this.setState( {backgroundColor1:'white'} );
                this.setState( {backgroundColor3:'gray'} );
            }

            else if (b==2) {
                this.setState( {backgroundColor2:'gray'} );
                this.setState( {backgroundColor1:'gray'} );
                this.setState( {backgroundColor3:'white'} );
            }


		let nameRadio = arr[event.target.value].name; 

        this.props.radioChange(nameRadio);

        let a = this.state.totalRadio;

        this.setState( { mark:arr[event.target.value].mark } );

        this.setState( { aboutMarkMain:arr[event.target.value].aboutMarkMain } );

        this.setState( { display:arr[event.target.value].display } );

	},

  render: function () {

        const divStyle1 = {
          background: this.state.backgroundColor1,
            borderWidth: 0,
        };

        const divStyle2 = {
          background: this.state.backgroundColor2,
            borderWidth: 0,
        };
        const divStyle3 = {
          background: this.state.backgroundColor3,
            borderWidth: 0,
        };
         const divStyleDisplay = {
          display: this.state.display,
          borderWidth: 0,
        };
        return (
        	<div>
                <button style={divStyle1} className="calculator__radio-gaz" id="optionA" name="group" type="radio" value="0" onClick={this.clickShow}>ГАЗель</button>
                <button style={divStyle2} className="calculator__radio-ford" id="optionB" name="group" type="radio" value="1" onClick={this.clickShow}>FORD</button>
                <button style={divStyle3}  className="calculator__radio-mercedes" id="optionC" name="group" type="radio" value="2" onClick={this.clickShow}>MERCEDES</button>
                <h2> Предпочитаемый двигатель</h2>
                <p>Выбор двигателя для водителей {this.state.mark} исходит из следующего критерия -<b>вес перевозимого груза.</b></p>
                <p>Если вес не превышает <b>2 тонны</b>, то отлично подойдет <b>{this.state.aboutMarkMain}</b>.</p>
                <p>Для веса до 3 тонн необходим более мощный двигатель - <b>2JZ-GE</b>.</p>
                <p style={divStyleDisplay}>Двигатели <b>1UZ-FE</b> и <b>5UZ-FE</b> подойдут для ГАЗели при весе перевозимого груза до <b>5 тонн</b></p>
    	    </div>
        );
    }
});



const Extra = React.createClass({
	getInitialState: function() {
        return { active: false, background:'white' };
    },

    clickHandler: function ()   {


        let active = !this.state.active;

        this.setState({ active: active });

        let activeState = this.state.active;

        if (activeState==true) {

            this.setState( {background:'white'} );
        }
        else if (activeState==false) {
            this.setState( {background:'gray'} );

        }

        this.props.addTotal( active ? this.props.price : -this.props.price );

        let name = this.props.name;

        this.props.definitionTotal(this.props.name +' '+this.props.price);

    },

    render: function(){

        const style = {
          background: this.state.background,
        };

        return ( 	
            <div onClick={this.clickHandler} style={style} className="calculator__avtosale-addition">
				<div >
					<p >
                    {this.props.name} <p>{this.props.price.toFixed(2)} Р</p>
                	</p>
				</div>
			</div> 
        );
    }
});


const Value = React.createClass({

	getInitialState: function(){
        return { active: false,
        active1:0,
        active2:0,
        active3:0,
        active4:0, 
        active5:0,
        activeTest:0,
        backgroundColor:'white'};
    },

    componentWillReceiveProps: function() {
        if  (this.state.active1<=0&&this.state.active2<=0&&this.state.active3<=0&&this.state.active4<=0) {
            this.setState({ backgroundColor: 'white' });

        }
    },

    onChangeActiveOne: function (event){

        if (event.target.innerText=='+') { 
            this.state.active1 = this.state.active1+1;
            this.setState({ active1: this.state.active1 });
        }

        else if (event.target.innerText=='-') {
            this.state.active1 = this.state.active1-1;
            this.setState({ active1: this.state.active1 });
        } 

        if (this.state.active1<0) {
            this.state.active1=0;
            this.setState({ active1: this.state.active1 });
        }


        if (this.state.active1>0) {
         this.setState({ backgroundColor: 'gray' });
        }



        let price = 9900;

        let name = "Установка баллонов под газ (103 литра) в количестве";

        let count =this.state.active1;

        let finishPrice = price*count;

        this.props.inputTotalOne( finishPrice,name,count);


    },



    onChangeActiveTwo: function (event){

    this.setState({ backgroundColor: 'gray' });

        if (event.target.innerText=='+') { 
            this.state.active2 = this.state.active2+1;
            this.setState({ active2: this.state.active2 });
        }

        else if (event.target.innerText=='-') {
            this.state.active2 = this.state.active2-1;
            this.setState({ active2: this.state.active2 });
        } 

        if (this.state.active2<0) {
            this.state.active2=0;
            this.setState({ active2: this.state.active2 });
        }

        if (this.state.active2>0) {

         this.setState({ backgroundColor: 'gray' });

        }

        let price = 10000;

        let name = "Установка баллонов под газ (130 литров) в количестве";

        let count = this.state.active2;

        let finishPrice = price*count;

        this.props.inputTotalTwo( finishPrice,name,count);

    },

    onChangeActiveThree: function (event){

         this.setState({ backgroundColor: 'gray' });


        if (event.target.innerText=='+') { 
            this.state.active3 = this.state.active3+1;
            this.setState({ active3: this.state.active3 });
        }

        else if (event.target.innerText=='-') {
            this.state.active3 = this.state.active3-1;
            this.setState({ active3: this.state.active3 });
        } 

        if (this.state.active3<0) {
            this.state.active3=0;
            this.setState({ active3: this.state.active3 });
        }

        if (this.state.active3>0) {
         this.setState({ backgroundColor: 'gray' });
        }

        let price = 10500;

        let name = "Установка баллонов под газ (137 литров) в количестве";

        let count = this.state.active3;

        let finishPrice = price*count;

        this.props.inputTotalThree( finishPrice,name,count);

    },

    onChangeActiveFour: function (event){

    this.setState({ backgroundColor: 'gray' });


        if (event.target.innerText=='+') { 
            this.state.active4 = this.state.active4+1;
            this.setState({ active4: this.state.active4 });
        }

        else if (event.target.innerText=='-') {
            this.state.active4 = this.state.active4-1;
            this.setState({ active4: this.state.active4 });
        } 

        if (this.state.active4<0) {
            this.state.active4=0;
            this.setState({ active4: this.state.active4 });
        }

        if (this.state.active4>0) {
         this.setState({ backgroundColor: 'gray' });
        }

        let price = 11300;

        let name = "Установка баллонов под газ (175 литров) в количестве";

        let count = this.state.active4;

        let finishPrice = price*count;

        this.props.inputTotalFour( finishPrice,name,count);

    },


    render: function() {

        const style = {
          background: this.state.backgroundColor,
        };

        return ( 
            <div style={style} className="calculator__setup">
            <p> Установка баллонов под газ </p>
            <p>Объём:</p>
                <div className="calculator__counter">
                    <span className="calculator__price">103 л.</span>
                    <button  onClick={this.onChangeActiveOne} type="button" className="calculator__btn">+</button>
                    <span className="calculator__status-ballon">{this.state.active1}</span>
                    <button onClick={this.onChangeActiveOne} type="button" className="calculator__btn">-</button>
                </div>
                <div className="calculator__counter">
                    <span >130 л. </span>
                    <button  onClick={this.onChangeActiveTwo} type="button" className="calculator__btn">+</button>
                    <span className="calculator__status-ballon">{this.state.active2}</span>
                    <button  onClick={this.onChangeActiveTwo} type="button" className="calculator__btn">-</button>
                  </div>
                <div className="calculator__counter">
                    <span>137 л. </span>
                    <button  onClick={this.onChangeActiveThree} type="button" className="calculator__btn">+</button>
                    <span className="calculator__status-ballon">{this.state.active3}</span>
                    <button onClick={this.onChangeActiveThree} type="button" className="calculator__btn">-</button>
                  </div>
                <div className="calculator__counter">
                    <span>175 л. </span>
                    <button onClick={this.onChangeActiveFour} type="button" className="calculator__btn">+</button>
                    <span className="calculator__status-ballon">{this.state.active4}</span>
                    <button onClick={this.onChangeActiveFour} type="button" className="calculator__btn">-</button>
                </div>
    		</div>
        );
    }
});
export default Shop;
