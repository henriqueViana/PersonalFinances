import React, { Component } from 'react';

export default class Grid extends Component{

  /**
   * Método responsável por configurar o grid css do bootstrap, espera por parâmetro receber os números
   * relativos as colunas, no formato de string, separados por espaço e retorna as casses css
   * 
   * @param: numbers
   * @return: classesCss
   */
  toCssClasses(numbers) {
    const cols = numbers ? numbers.split(' ') : [];
    let classesCss = '';

    if(cols[0]) classesCss = `col-xs-${cols[0]}`;
    if(cols[1]) classesCss = ` col-sm-${cols[1]}`;
    if(cols[2]) classesCss = ` col-md-${cols[2]}`;
    if(cols[3]) classesCss = ` col-lg-${cols[3]}`;

    return classesCss;
  }

  render() {
    
    const gridClasses = this.toCssClasses(this.props.cols || '12');
    
    return(
      <div className={gridClasses}>
        {this.props.children}
      </div>
    )
  }
} 

