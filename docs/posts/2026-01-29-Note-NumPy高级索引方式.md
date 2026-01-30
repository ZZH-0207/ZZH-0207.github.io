NumPy不仅可以使用整数和切片进行索引，还可以用数组索引数组。
``` Python
import numpy as np
```
### 一维数组

#### 用一维数组索引一维数组
``` Python
a = np.arange(12)+1
# array([ 1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12])

b = np.array([0,5,4,6])
# array([0, 5, 4, 6])

a[b]
# array([1, 6, 5, 7])
```

#### 用二维数组索引一维数组
``` Python
a = np.arange(12)+1
# array([ 1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12])

c = np.array([[1,2],[3,4]])
# array([[1, 2],
#        [3, 4]])

a[c]
# array([[2, 3],
#        [4, 5]])
```
这里`a[c]`等价于`a[[a[2],a[3]],[a[1],a[4]]]`

### 二维数组
``` Python
rg = np.random.default_rng(seed=1)
a = np.int64(np.floor(rg.random((4,5))*10))  # 先创建一个随机矩阵
# array([[5, 9, 1, 9, 3],
#        [4, 8, 4, 5, 0],
#        [7, 5, 3, 7, 3],
#        [4, 1, 4, 2, 2]])
```

#### 用一维数组索引二维数组

只索引axis=0
``` Python
b = np.array([1,2,3])  # 创建用于索引的矩阵
# array([1, 2, 3])

a[b]
# array([[4, 8, 4, 5, 0],
#        [7, 5, 3, 7, 3],
#        [4, 1, 4, 2, 2]])
```

索引axis=0和axis=1
``` Python
c = np.array([2,3,4])
# array([2, 3, 4])

a[b,c]
# array([4, 7, 2])
```

#### 用二维数组索引二维数组
``` Python
d = np.array([[1,2],[3,2]])
# array([[1, 2],
#        [3, 2]])

a[d]
# array([[[4, 8, 4, 5, 0],
#         [7, 5, 3, 7, 3]],

#        [[4, 1, 4, 2, 2],
#         [7, 5, 3, 7, 3]]])

e = np.array([[1,2],[3,4]])
# array([[1, 2],
#        [3, 4]])

a[d,e]
# array([[8, 3],
#        [2, 3]])

a[d,2]
# array([[4, 3],
#        [4, 3]])

a[:,e]
# array([[[9, 1],
#         [9, 3]],

#        [[8, 4],
#         [5, 0]],

#        [[5, 3],
#         [7, 3]],

#        [[1, 4],
#         [2, 2]]])
```

#### 用bool值进行索引
``` Python
a = np.arange(12).reshape(3, 4)
# array([[ 0,  1,  2,  3],
#        [ 4,  5,  6,  7],
#        [ 8,  9, 10, 11]])
b = a > 4
# array([[False, False, False, False],
#        [False,  True,  True,  True],
#        [ True,  True,  True,  True]])

a[b]
# array([ 5,  6,  7,  8,  9, 10, 11])
```

更复杂地：
``` Python
a = np.arange(12).reshape(3, 4)
# array([[ 0,  1,  2,  3],
#        [ 4,  5,  6,  7],
#        [ 8,  9, 10, 11]])

b1 = np.array([False,True,True])
# array([False,  True,  True])

a[b1]
# array([[ 4,  5,  6,  7],
#        [ 8,  9, 10, 11]])

# 这里b1[1]和b2[2]为True, 可以把b1看成np.array([1,2])
a[np.array([1,2])]
# array([[ 4,  5,  6,  7],
#        [ 8,  9, 10, 11]])
# 可以看到，a[np.array([1,2])]和a[b1]结果相同

b2 = np.array([True, False, True, False])
a[:,b2]
# array([[ 0,  2],
#        [ 4,  6],
#        [ 8, 10]])

# 同样地,可以把b2看成np.array([0,2])
a[:,np.array([0,2])]
# array([[ 0,  2],
#        [ 4,  6],
#        [ 8, 10]])

a[b1,b2]
# array([ 4, 10])
# 等价于a[np.array([1,2]),np.array([0,2])]
```