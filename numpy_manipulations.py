import numpy as np
import matplotlib.pylab as plt
# %matplotlib inline

image = plt.imread('del8.jpg')

print image.shape


def plti(image, h=8, **kwargs):
    """
        image plotting function
    """
    y = image.shape[0]
    x = image.shape[1]
    w = (x / y) * h
    print w, y, x
    plt.figure(figsize=(48, h))
    plt.imshow(image, interpolation="none", **kwargs)
    plt.axis('off')


plti(image)
