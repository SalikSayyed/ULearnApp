import React from 'react'
import { FlatList } from 'react-native'

import PopularCourseData from '../config/PopularCourseData'
import CourseCard from './CourseCard'
const PopularCourseList = ({ ...otherProps }) => {
  const _keyExtractor = (item, index) => index.toString()
  return (
    <FlatList
      data={PopularCourseData}
      {...otherProps}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      keyExtractor={_keyExtractor}
      renderItem={({ item }) => (
        <CourseCard
          image={require('../assets/index1_lot1_cat1.png')}
          courseName={item.coursename}
          instructorName={item.teacher}
          price={item.price}
        />
      )}
    />
  )
}
export default PopularCourseList
