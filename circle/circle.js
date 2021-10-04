const circleArea = (radius) => {
    console.log(`Daire alanı: ${Math.pow(radius, 2) * Math.PI}`);
}
const circleCircumference = (radius) => {
    console.log(`Daire Çevresi: ${2 * Math.PI * radius}`);
}

module.exports = {
    circleArea,
    circleCircumference
}