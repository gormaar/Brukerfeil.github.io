import React from "react";
import styles from "./styles.module.css";

const MemberPresentation = () => {
	return (
		<div className={styles.container}>
			<h2>Om oss</h2>
			<div>
				<div className={styles.presentation}>
					<h3>Marius Holen</h3>
					<img
						src={
							"https://scontent.fsvg1-1.fna.fbcdn.net/v/t1.0-1/42435076_10156094032148547_3890462169346605056_n.jpg?_nc_cat=110&_nc_oc=AQkune-aYiHuHL9NLahyhavg3n3aZWb8pehWxywIbDT_OnCYE9ldlx54Vjh-RRFZe8s&_nc_ht=scontent.fsvg1-1.fna&oh=cdd7d8697f15fc45dc928f2f2e0215f3&oe=5E3AB841"
						}
						alt=""
					/>
				</div>
				<div className={styles.presentation}>
					<h3>Vegard Alvsaker</h3>
					<img
						src={
							"https://scontent.fsvg1-1.fna.fbcdn.net/v/t1.0-9/29025345_10215097042955723_3949473770158161920_n.jpg?_nc_cat=102&_nc_oc=AQmO_M0G6MChUfCDZTtXilSv_DiHjKaR_sb0s5xM_1I5T92UzMtCVwSLsnJoGgPpOsI&_nc_ht=scontent.fsvg1-1.fna&oh=f42811349fc647b4f3a3b4e888345882&oe=5E340720"
						}
						alt=""
					/>
				</div>
				<div className={styles.presentation}>
					<h3>Espen Oftedal</h3>
					<img
						src={
							"https://scontent.fsvg1-1.fna.fbcdn.net/v/t1.0-9/548999_476483462396243_1053149377_n.jpg?_nc_cat=109&_nc_oc=AQmqtiP6rwyvQvY28HUJBv-7JG_DKC4P67VKDGW8oL6mYZZMhNAu9a2LRqZo7JbQ_Uw&_nc_ht=scontent.fsvg1-1.fna&oh=ca986924aa0adb68d86ba615288f75da&oe=5E241690"
						}
						alt=""
					/>
				</div>
				<div className={styles.presentation}>
					<h3>Gorm-Erik Aarsheim</h3>
					<img
						src={
							"https://scontent.fsvg1-1.fna.fbcdn.net/v/t1.0-9/31166735_10211816413233459_3511481947433992192_n.jpg?_nc_cat=101&_nc_oc=AQk1vP3gZ2FeQjIQ8Oceh0y4u1G--Qgwx9NS0Bt09SotXa0Vk-E6xgmE_6H1eSqp6wY&_nc_ht=scontent.fsvg1-1.fna&oh=3d99f17f24bbd76a692b9ec9713eb0d6&oe=5DF05566"
						}
						alt=""
					/>
				</div>
				<div className={styles.presentation}>
					<h3>Kevin Archival Smørdal</h3>
					<img
						src={
							"https://scontent.fsvg1-1.fna.fbcdn.net/v/t1.0-9/11430108_10152889155071641_6658097454161292283_n.jpg?_nc_cat=101&_nc_oc=AQnfH13RNww7RwsE50btY8Tbjx9vNJgolJg8MzMi9M-0m-Qn2qDMMeGeY9c5jAYtoGo&_nc_ht=scontent.fsvg1-1.fna&oh=c8d92558b6ba5cb29b918e2ee016b102&oe=5E3B3CBC"
						}
						alt=""
					/>
				</div>
				<div className={styles.presentation}>
					<h3>Ingve Fosse</h3>
					<img
						src={
							"https://scontent.fsvg1-1.fna.fbcdn.net/v/t31.0-8/412450_3619972574209_194770447_o.jpg?_nc_cat=100&_nc_oc=AQm1f9AgcdD9S1JdEsRwntHixgRxOVo-s7eVSVs2xKf4I0NO4-bsB08Q-AHq1tdwVSM&_nc_ht=scontent.fsvg1-1.fna&oh=a207fbddc3bd098a66fd4cff6ffc4707&oe=5E3AC27F"
						}
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default MemberPresentation;
