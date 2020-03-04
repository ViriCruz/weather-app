const extractNumbers = str => str.match(/-?\d+(?:\.\d+)?/g).map(Number)[0];

export default extractNumbers;
