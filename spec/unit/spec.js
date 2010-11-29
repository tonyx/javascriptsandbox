
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
    it 'for two matches shoulw mark to two m'
      mark("yxxb","rgby").should.be "mm"
    end
    it 'don\'t count twice the same match'
      mark("bxxb","rgby").should.be "m"
    end
    it 'for a perfect match in first positions should mark to p'
      mark("rxxx","rgby").should.be "p"
    end
    it 'for a perfect match in second positions should mark to p'
      mark("xgxx","rgby").should.be "p"
    end
    it 'for two perfect matches should mark to two p'
      mark("rxbx","rgby").should.be "pp"
    end
    it 'for two perfect and two perfect should mark to ppmm'
      mark("rybg","rgby").should.be "ppmm"
    end
  end
end



