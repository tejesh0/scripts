# probability plotting

import pandas as pd
import matplotlib.pyplot as plt
import scipy.stats as stats
import numpy as np
import pylab


tsu = pd.Series(np.random.random(1000))
tsn = pd.Series(np.random.randn(1000))

plt.figure()
stats.probplot(tsu, dist='norm', plot=pylab)

plt.figure()
stats.probplot(tsu, dist="uniform", plot=pylab)

plt.figure()
stats.probplot(tsn, dist="norm", plot=pylab)

plt.figure()
stats.probplot(tsn, dist="uniform", plot=pylab)

plt.show()
