describe 'code kata'
  describe 'codebreaker'
    it 'for no matches should mark to empty'
      mark("xxxx","rgby").should.be ""
    end
    it 'for an imperfect match in first positio should mark to m'
      mark("yxxx","rgby").should.be "m"
    end
    it 'for an imperfect match in second positio should mark to m'
      mark("xyxx","rgby").should.be "m"
    end
    it 'for two matches should mark to two m'
      mark("byxx","rgby").should.be "mm"
    end
    it 'for same match should count it just once'
      mark("yyxx","rgby").should.be "m"
    end
    it 'for a perfect match in first position should mark to p'
      mark("rxxx","rgby").should.be "p"
    end
    it 'for a perfect match in second position should mark to p'
      mark("xgxx","rgby").should.be "p"
    end
    it 'for two matches should mark to two p'
      mark("rgxx","rgby").should.be "pp"
    end
    it 'for two perfect matches and two impefect should  mark to two p and two m'
      mark("rgyb","rgby").should.be "ppmm"
    end
    it 'for two imperfect matches equals between them, mark them with two m'
      mark("ggxx","rbgg").should.be "mm"
    end
  end
end
