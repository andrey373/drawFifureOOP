class App{
    constructor(myCanvas){
        this.canvas = myCanvas;
        this.ctx = canvasNode.getContext('2d');
        this.render();
        this.figures = [];
    }

    addFigure(){
        this.figures.push(this.figureElt);
    }

    drawFigure(element){
        this.figureElt = element;
    }

    clear(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    renderFigure(component){
        if(component.canRender()){//Проверяет, является ли значение конечным числом
            this.ctx.save();// Сохраняет состояние текущего контекста
            this.ctx.translate(component.x, component.y);// Изменяет позицию на холсте
            component.render(this.ctx);// вызываем у фигуры метод render
            this.ctx.restore();// Возвращает ранее сохранённое состояние контура и атрибуты
        }
    }
    
    render(){
        requestAnimationFrame(() => {
            this.clear();

            for(let elt of this.figures){
                this.renderFigure(elt);
            }

            if(this.figureElt){
                this.renderFigure(this.figureElt);
            }

            this.render();// для постоянной отрисовки фигуры

        })
    }
}

