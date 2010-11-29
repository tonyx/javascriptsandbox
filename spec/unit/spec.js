
describe 'code kata'
  describe 'codebreaker'
    it 'for no matches should mark to empty'
      mark("xxxx","rgby").should.be ""
    end
    it 'for imperfect match first position should mark to m'
      mark("yxxx","rgby").should.be "m"
    end
    it 'for imperfect match second position should mark to m'
      mark("xyxx","rgby").should.be "m"
    end
    it 'for imperfect match third position should mark to m'
      mark("xxyx","rgby").should.be "m"
    end
    it 'for imperfect match fourth position should mark to m'
      mark("xxxb","rgby").should.be "m"
    end
    it 'two perfect match gets two  m'
      mark("yxxb","rgby").should.be "mm"
    end
    it 'don\'t count twice the same match'
      mark("bxxb","rgby").should.be "m"
    end
  end
end



