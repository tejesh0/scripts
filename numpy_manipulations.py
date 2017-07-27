#!/usr/bin/python

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

fig, axs = plt.subplots(nrows=1, ncols=3, figsize=(48, 8))

for c, ax in zip(range(3), axs):
    tmp_image = np.zeros(image.shape, dtype="uint8")
    tmp_image[:, :, c] = image[:, :, c]
    ax.imshow(tmp_image)
    ax.set_axis_off()


