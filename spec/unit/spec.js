
describe 'code kata'
  describe 'codebreaker'
    it 'for no match should mark to empty'
      mark("xxxx","rgby").should.be ""
    end
    it 'for a perfect match in first position should mark to m'
      mark("yxxx","rgby").should.be "m"
    end
    it 'asdlfjaslffor a perfect match in first position should mark to m'
      countNonPositionals("yxxx","rgby").should.be 1
    end
    it 'sfklsdasdlfjaslffor a perfect match in first position should mark to m'
	_.reduce(_.range(3),function(acc,n){return acc+"m";},"").should.be "mmm"
      //countNonPositionals("yxxx","rgby").should.be 1
    end
    it 'for a perfect match in second position should mark to m'
      mark("xyxx","rgby").should.be "m"
    end
    it 'for a perfect match in third position should mark to m'
      mark("xxyx","rgby").should.be "m"
    end
    it 'for a perfect match in fourth position should mark to m'
      mark("xxxb","rgby").should.be "m"
    end
    it 'for two matches should mark to two m'
      mark("yxxb","rgby").should.be "mm"
    end
    it 'don\'t count twice the same match'
      mark("bxxb","rgby").should.be "m"
    end
    it 'for perfect match in first position should mar to p'
      mark("rxxx","rgby").should.be "p"
    end
    it 'for perfect match in second position should mar to p'
      positionalMatch("xgxx","rgby").should.be "p"
    end
    it 'for perfect match in third position should mar to p'
      positionalMatch("xxbx","rgby").should.be "p"
    end
    it 'two perfect matche should mark to two p'
      positionalMatch("rgxx","rgby").should.be "pp"
    end
  end
end



