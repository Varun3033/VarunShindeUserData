import { Card, Button } from "antd";
import {
  HeartOutlined,
  EditOutlined,
  DeleteOutlined,
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
  HeartFilled,
} from "@ant-design/icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUser,
  setEditUserDetails,
  updateLike,
} from "../redux/user.slice";
const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  const { list: users, loader } = useSelector((state) => state.users);
  return (
    <>
      {loader ? (
        <>
          <h1>Loading....</h1>
        </>
      ) : (
        <>
          {users.map((user, index) => {
            return (
              <div className="col-md-4 mb-4 col-8 col-lg-3 m-auto">
                <Card
                  cover={
                    <img
                      alt={user.name}
                      src={`https://api.dicebear.com/8.x/avataaars/svg?seed=${user.name}`}
                    />
                  }
                  actions={[
                    <HeartFilled
                      key="heart"
                      onClick={() => dispatch(updateLike(index))}
                      style={{ color: user.like ? "red" : "black" }}
                    />,
                    <EditOutlined
                      key="edit"
                      data-bs-toggle="modal"
                      data-bs-target="#user-edit"
                      onClick={() => dispatch(setEditUserDetails(index))}
                    />,
                    <DeleteOutlined
                      onClick={() => dispatch(deleteUser(index))}
                      key="delete"
                    />,
                  ]}
                >
                  <Card.Meta
                    title={user.name}
                    description={
                      <div>
                        <p>
                          <MailOutlined /> {user.email}
                        </p>
                        <p>
                          <PhoneOutlined /> {user.phone}
                        </p>
                        <p>
                          <GlobalOutlined /> {user.website}
                        </p>
                      </div>
                    }
                  />
                </Card>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};

export default UserCard;
