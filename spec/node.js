
require.paths.unshift('spec', '/var/lib/gems/1.8/gems/jspec-4.3.3/lib', 'lib')
require('jspec')
require('unit/spec.helper')
require('tonyxx')


JSpec
  .exec('spec/unit/spec.js')
  //.run({ reporter: JSpec.reporters.Terminal, fixturePath: 'spec/fixtures', failuresOnly: false })
  .run({ reporter: JSpec.reporters.Terminal, fixturePath: 'spec/fixtures', failuresOnly: false })
  .report()
