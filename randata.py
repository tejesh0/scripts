import json

import os
from random import randint
print randint(0,9)
with open('bangalore_pincode.json','r+') as f:
	data = json.load(f)
	# print data
	t = data['features']
	for d in t:
		print d['properties']
		d['properties'].update({'PI':randint(0,9)})
		
		# print d['geometry']
		# d['geometry']. = 0
		# c = {'PI':randint(0,9)}
		# d.append(c)
		# print d
		# 
	print t

with open('bangalore_pincode.json', 'w') as f:
	f.write(json.dumps(data))