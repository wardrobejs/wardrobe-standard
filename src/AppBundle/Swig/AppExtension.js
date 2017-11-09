const SwigExtension = require('wardrobe').Swig.Extension;

class AppExtension extends SwigExtension
{
    getFilters ()
    {
        return {
            'price': this.priceFilter
        };
    }

    getTokenParsers () {
        return [
            require('./TestTokenParser')
        ];
    }


    priceFilter(number, decimals = 0, decPoint = '.', thousandsSep = ',') {
        let price = this.number_format(number, decimals, decPoint, thousandsSep);

        return `$${price}`;
    }

    number_format (number, decimals, decPoint, thousandsSep) {
        number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
        let n = !isFinite(+number) ? 0 : +number;
        let prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
        let sep = (typeof thousandsSep === 'undefined') ? ',' : thousandsSep;
        let dec = (typeof decPoint === 'undefined') ? '.' : decPoint;
        let toFixedFix = function (n, prec) {
            let k = Math.pow(10, prec);
            return '' + (Math.round(n * k) / k)
                .toFixed(prec)
        };
        let s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
        if (s[0].length > 3) {
            s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep)
        }
        if ((s[1] || '').length < prec) {
            s[1] = s[1] || '';
            s[1] += new Array(prec - s[1].length + 1).join('0')
        }
        return s.join(dec)
    }
}

module.exports = AppExtension;