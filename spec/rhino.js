load('/var/lib/gems/1.8/gems/jspec-4.3.3/lib/jspec.js')
load('/var/lib/gems/1.8/gems/jspec-4.3.3/lib/jspec.xhr.js')
load('lib/codebreaker.js')
load('lib/underscore.js')
load('spec/unit/spec.helper.js')


JSpec
.exec('spec/unit/spec.js')
.run({ reporter: JSpec.reporters.Terminal, fixturePath: 'spec/fixtures' })
.report()
