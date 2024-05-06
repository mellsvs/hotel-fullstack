package com.mellsvs.Hotelbooking.service;

import com.mellsvs.Hotelbooking.model.Room;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.math.BigDecimal;
import java.sql.SQLException;

public interface IRoomService {

    Room addNewRoom(MultipartFile photo, String roomType, BigDecimal roomPrice) throws IOException, SQLException;
}
