import React from 'react'
import { Input, Tooltip } from 'antd'
const index = (props) => {
  return (
    <Tooltip title={'错误提示'} visible placement="right" color="red">
      <Input value={props.value} onChange={props.onChange} />
    </Tooltip>
  )
}

export default index
