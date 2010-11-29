
describe 'code kata'
  describe 'codebreaker'
    it 'for no matches should mark to empty'
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
    it 'for an imperfect match in fourth position should mark to m'
      mark("xxxb","rgby").should.be "m"
    end
    it 'for two matches should mark to two m'
      mark("bxxg","rgby").should.be "mm"
    end
    it 'for a repeated match should not count them twice'
      mark("bxxb","rgby").should.be "m"
    end
    it 'for perfect match in firstr position should mark to p'
      mark("rxxx","rgby").should.be "p"
    end
    it 'for perfect match in second position should mark to p'
      mark("xgxx","rgby").should.be "p"
    end
    it 'for two  perfect matches should mark to two p'
      mark("rgxx","rgby").should.be "pp"
    end
    it 'two perfect matches and two imperfect matches should mark to ppmm'
      mark("rgyb","rgby").should.be "ppmm"
    end
  end
end



