
describe 'code kata'
  describe 'codebreaker'
    it 'for no match should mark to empty'
      mark("xxxx","rgby").should.be ""
    end
    it 'for an imperfect match in first position should mark to m'
      mark("yxxx","rgby").should.be "m"
    end
    it 'for an imperfect match in second position should mark to m'
      mark("xyxx","rgby").should.be "m"
    end
    it 'for an imperfect match in third position should mark to m'
      mark("xxyx","rgby").should.be "m"
    end
    it 'for an imperfect match in third position should mark to m'
      mark("xxxb","rgby").should.be "m"
    end
    it 'for two imperfect match should mark to two m'
      mark("yxxb","rgby").should.be "mm"
    end
    it 'dont\'t  count twice the same match'
      mark("yyxx","rgby").should.be "m"
    end
    it 'dont\'t  count twice the same match'
      mark("yyxx","rgby").should.be "m"
    end
    it 'for a perfect match in first position shoul mark to p'
      mark("rxxx","rgby").should.be "p"
    end
    it 'for a perfect match in second position shoul mark to p'
      positionalMatch("xgxx","rgby").should.be "p"
    end
    it 'for a perfect match in third position shoul mark to p'
      positionalMatch("xxbx","rgby").should.be "p"
    end
    it 'for a perfect match in fourth position shoul mark to p'
      positionalMatch("xxxy","rgby").should.be "p"
    end
    it 'two perfect matches should mark to two p'
      positionalMatch("rxxy","rgby").should.be "pp"
    end
  end
end



