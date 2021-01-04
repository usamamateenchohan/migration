import React, { useEffect, useState } from 'react';
import FamilyMemberHeader from './FamilyMemberHeader/FamilyMemberHeader';
import FamilyMemberProfile from './FamilyMemberInfo/FamilyMemberProfiles';

const FamilyMemberComponent = ({
  onGetFamilyMemberDetail,
  familyMemberDetail
}) => {
  const [memberData, setMemberData] = useState({})

  useEffect(() => {
    onGetFamilyMemberDetail()
  }, [onGetFamilyMemberDetail])

  const familyMemberData = (data) => {
    setMemberData(data)
  }

  console.log("familyMemberDetailfamilyMemberDetail", familyMemberDetail)

  return (
    <div className="container">
      <FamilyMemberHeader
        familyMemberDetail={familyMemberDetail}

        familyMemberData={familyMemberData}
      />
      <FamilyMemberProfile
        memberData={memberData}
      />

    </div>
  )

}


export default FamilyMemberComponent;
