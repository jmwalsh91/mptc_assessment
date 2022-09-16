import { Paper, Skeleton } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { getAllStudents, StudentData } from '~/services/sb'
import StudentRow from './StudentRow';

type Props = {}

function StudentList({}: Props) {
    const { data, status } = useQuery(["prefetchStudents"], getAllStudents);
    if (status === "loading") {
        return (
            <div>
                <Skeleton height={50} />
                <Skeleton height={50} />
                <Skeleton height={50} />
                <Skeleton height={50} />
                <Skeleton height={50} />
                <Skeleton height={50} />
                <Skeleton height={50} />
                <Skeleton height={50} />
                <Skeleton height={50} />
                <Skeleton height={50} />
            </div>
        )
    }
    if (status === "error") {
        return (
            <div>
                Error
            </div>
        )
    }

  return (
    <div>
      

        {data[0].name && data.map((oneStudent: StudentData) => (
            <StudentRow student={oneStudent} />
            ))}
       
    </div>
  )
 
}

export default StudentList