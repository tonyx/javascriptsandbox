
describe 'code kata'
  describe 'codebreaker'
    it 'for no matches should mark to empty'
      mark("xxxx","rgby").should.be ""
    end
    it 'for imperfect match in first position should mark to m'
      mark("yxxx","rgby").should.be "m"
    end
    it 'for imperfect match in second position should mark to m'
      mark("xyxx","rgby").should.be "m"
    end
    it 'for imperfect match in third position should mark to m'
      mark("xxyx","rgby").should.be "m"
    end
    it 'for imperfect match in fourth position should mark to m'
      mark("xxxb","rgby").should.be "m"
    end
    it 'for two imperfect matches should mark to two m'
      mark("yxxb","rgby").should.be "mm"
    end
    it 'don\'t count twice the same match'
      mark("bxxb","rgby").should.be "m"
    end
    it 'positional match in first position should mark to p'
      mark("rxxx","rgby").should.be "p"
    end
    it 'positional match in second position should mark to p'
      positionalMatch("xgxx","rgby").should.be "p"
    end
    it 'positional match in third position should mark to p'
      positionalMatch("xxbx","rgby").should.be "p"
    end
    it 'two perfect matches'
      positionalMatch("rxbx","rgby").should.be "pp"
    end
  end
end



