const SwigTokenParser = require('wardrobe').Swig.TokenParser;

class TestTokenParser extends SwigTokenParser
{
    constructor ()
    {
        super();
        this.ends       = true;
        this.blockLevel = true;
    }

    getTag ()
    {
        return 'test';
    }

    parse (str, line, parser, types, options)
    {
        return true;
    }

    compile (compiler, args, content, parents, options, blockName)
    {
        content = content.toString().trim();
        return '_output += "test ' + content + '('+args.join(', ')+')";';
    }
}

module.exports = TestTokenParser;