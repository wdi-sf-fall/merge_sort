function SortClass(){

}
SortClass.prototype.merge = function(left, right){
        var result = [];

        while (left.length > 0 && right.length > 0){
            if (left[0] < right[0]){
                result.push(left.shift());
            } else {
                result.push(right.shift());
            }
        }

        result = result.concat(left).concat(right);

        return result;
    };

SortClass.prototype.mergeSort =  function(items){

        if (items.length < 2) {
            return items;
        }

        var middle = Math.floor(items.length / 2),
            left    = items.slice(0, middle),
            right   = items.slice(middle);

        return this.merge(this.mergeSort(left), this.mergeSort(right));
    };

module.exports = sortClass;