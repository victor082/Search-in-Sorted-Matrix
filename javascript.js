# O(n * m) where n is the length and m is the width
# performing a linear search through the matrix
# what's the analogous form of binary search for matrix? 


# linear: going through every value in the data structure
# linear: O(n)


# Can we binary serach through the first row elements to figure out which row the target element must be in?
# We want to find a row where the first element > target, since that tells us that the target element is in the previous row

function search_in_sorted_matrix(matrix, target):
  # start in the upper right (or lower left) corner 
  # traverse to the right until we either find the element or find 
  # the first element < target 
    # start traversing down the column until we either find the element 
    # or we find the first element > target 
      # continue traversing left until we find the target element 
  # target doesn't exist in the matrix 
  # return (-1, -1)
