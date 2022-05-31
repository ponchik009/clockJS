/**
 * функция высшего порядка
 * принимает много функций, которые должны вызываться по цепочке
 * далее работает с первоначальным аргументом, выполняя функцию из массива и передавая результат в следующую функцию
 */
const compose =
  (...functions) =>
  (arg) =>
    functions.reduce((composed, f) => f(composed), arg);

module.exports = {
  compose,
};
