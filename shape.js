class FigureShape{
    constructor(x, y, size){
        this.setPosition(x, y);
        this.setFigureWidth(size);
        this.figureStrokeColor = '#000';
    }

    setPosition(x, y){
        this.x = x;
        this.y = y;
    }

    setFigureWidth(size){
        this.figureWidth = (size < 50) ? 50 : (size > 150) ? 150 : size;
    }

    setStrokeColor(strokeColor){
        this.figureStrokeColor = strokeColor;
    }

    setFillColor(fillColor){
        this.figureFillColor = fillColor;
    }

    canRender(){
        return (
            Number.isFinite(this.x) &&
            Number.isFinite(this.y)//Проверяет, является ли значение конечным числом
        )
    }
}

class Circle extends FigureShape{
    render(ctx){
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = this.figureStrokeColor;
        ctx.fillStyle = this.figureFillColor;
        ctx.arc(0, 0, this.figureWidth / 2, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.stroke();
    }
}

class Quad extends FigureShape{
    render(ctx){
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = this.figureStrokeColor;
        ctx.fillStyle = this.figureFillColor;
        ctx.rect(
            -this.figureWidth / 2,
            -this.figureWidth / 2,
            this.figureWidth,
            this.figureWidth);
        ctx.fill();
        ctx.stroke();
    }
}

class Triangle extends FigureShape{
    render(ctx){
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = this.figureStrokeColor;
        ctx.fillStyle = this.figureFillColor;
        ctx.moveTo(
            -this.figureWidth / 2,
            -this.figureWidth / 2
        );
        ctx.lineTo(this.figureWidth / 2, -this.figureWidth / 2);
        ctx.lineTo(this.figureWidth - this.figureWidth, this.figureWidth / 2);
        ctx.fill();
        ctx.closePath();
        ctx.stroke();
    }
}