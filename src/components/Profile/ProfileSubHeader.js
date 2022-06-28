import React from "react";
import "./profile.css";

const ProfileSubHeader = () => {
	return (
		<div className="profile_subHeader_container">
			<div className="profile_header_lg d-none d-lg-block">
				<h3 className="">Lengkapi info account</h3>
			</div>
			<div className="profile_photo_section">
				<div className="profile_dummy_dropzone">
					<img src="/SVG/camera.svg" className="profile_camera_icon" alt="camera" />
				</div>
			</div>
		</div>
	);
};

export default ProfileSubHeader;
